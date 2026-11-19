// The World in One Picture — 18 November 2026 (Evening Edition, V5).
// Entrypoint: copies entry.png (sitting next to this file) into
// MAKEFUN_OUTPUT_DIR, then verifies the copy byte-for-byte before exiting.
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function sha256Of(path: string): string {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function fail(message: string): never {
  console.error(`main.ts: error: ${message}`);
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR;

if (!outDir) fail("MAKEFUN_OUTPUT_DIR is not set");
if (!existsSync(source)) fail(`entry.png not found next to main.ts: ${source}`);

const dest = join(outDir, "entry.png");
copyFileSync(source, dest);

if (!existsSync(dest)) fail(`copy missing after copy: ${dest}`);
const sourceSize = statSync(source).size;
const destSize = statSync(dest).size;
if (sourceSize !== destSize) {
  fail(`byte size mismatch: source ${sourceSize} bytes, copy ${destSize} bytes`);
}
if (!readFileSync(dest).subarray(0, 8).equals(PNG_MAGIC)) {
  fail("copy is not a PNG (magic bytes do not match)");
}
const sourceHash = sha256Of(source);
const destHash = sha256Of(dest);
if (sourceHash !== destHash) {
  fail(`sha256 mismatch: source ${sourceHash}, copy ${destHash}`);
}
console.log(`main.ts: copied entry.png (${destSize} bytes, sha256 ${destHash}) to ${dest}`);
