// news-image-20261118 — V2 entrypoint (Node 22, standard library only).
//
// The poster is drawn once, ahead of time, and shipped in this repository
// as entry.png (1024 x 1024, under the 1 MiB cap). This program's only job
// is to place an exact copy of that file at the grader's output path, so
// every run writes the same bytes the judge sees.
//
// The grader runs it with MAKEFUN_OUTPUT_DIR set to its output directory
// (or /output by default); outside the grader, set the variable yourself:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// The copy must be exact: same size as the shipped poster, or fail loudly.
const from = statSync(source).size;
const to = statSync(target).size;
if (from !== to) {
  throw new Error(`entry.png copy mismatch: wrote ${to} bytes, expected ${from}`);
}
console.log(`wrote ${target} (${to} bytes)`);
