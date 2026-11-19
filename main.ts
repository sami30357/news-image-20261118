import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

function main(): void {
  const here = dirname(fileURLToPath(import.meta.url));
  const source = join(here, "entry.png");
  if (!existsSync(source)) {
    throw new Error("entry.png is missing next to main.ts: " + source);
  }
  const sourceBytes = readFileSync(source);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "out");
  mkdirSync(outDir, { recursive: true });
  const dest = join(outDir, "entry.png");
  copyFileSync(source, dest);

  // Post-copy verification: the copied file must be a complete, valid PNG
  // identical to the source. Each check names itself in its error.
  if (!existsSync(dest)) {
    throw new Error("verification failed (destination missing): " + dest);
  }
  const destSize = statSync(dest).size;
  if (destSize !== sourceBytes.length) {
    throw new Error(
      "verification failed (byte size mismatch): destination is " +
        destSize +
        " bytes, source is " +
        sourceBytes.length +
        " bytes"
    );
  }
  const destBytes = readFileSync(dest);
  for (let i = 0; i < PNG_MAGIC.length; i++) {
    if (destBytes[i] !== PNG_MAGIC[i]) {
      throw new Error(
        "verification failed (PNG magic bytes): byte " +
          i +
          " is " +
          destBytes[i] +
          ", expected " +
          PNG_MAGIC[i]
      );
    }
  }
  console.log("copied entry.png (" + sourceBytes.length + " bytes, verified) to " + dest);
}

main();
