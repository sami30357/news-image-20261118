// news-image-20261118 — entrypoint.
//
// The poster is pre-built (entry.png, 1024x1024, the world news of
// Wednesday 18 November 2026). This program copies it into the
// grader's output directory as entry.png. No network, no writes
// outside the output directory, nothing deleted.
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

if (!existsSync(source)) {
  console.error(`missing poster: ${source}`);
  process.exit(1);
}

const head = readFileSync(source).subarray(0, 8);
if (!head.equals(PNG_MAGIC)) {
  console.error("poster is not a PNG");
  process.exit(1);
}

const size = statSync(source).size;
if (size > 1048576) {
  console.error(`poster over the 1 MiB cap: ${size} bytes`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target} (${size} bytes)`);
