// Front-page entrypoint for the 18 November 2026 news poster.
//
// The poster itself is drawn ahead of time and committed as entry.png.
// This program only places that file where the grader expects it:
// the directory named by MAKEFUN_OUTPUT_DIR.
//
// It uses Node builtins alone, reaches for no network, and writes
// nowhere except the output directory. The copy is byte for byte, so
// running the program twice writes the same file twice.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The repository root is the folder that holds this file.
const root = dirname(fileURLToPath(import.meta.url));

// The committed poster, next to this file.
const source = join(root, "entry.png");

// The grader sets MAKEFUN_OUTPUT_DIR. When a person runs this by hand
// with no variable set, a local "out" folder is used instead.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "out");

if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repository root");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
