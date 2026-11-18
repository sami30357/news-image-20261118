// World News — 18 November 2026. Entry for make.fun's news-image-20261118.
// Node 22, standard library only. The entry image is entry.png beside this file;
// the program copies it to /output/entry.png (or to MAKEFUN_OUTPUT_DIR when
// run outside the grader's container). Deterministic: the same bytes every run.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
