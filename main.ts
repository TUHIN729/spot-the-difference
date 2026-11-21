// Lantern Lane — the hand-in program for the spot-the-difference bounty.
// Node 22, standard library only. It gathers this repository's game/ and
// screenshots/ into the output directory and writes the dossier.json the
// judge reads, using the vendored make.fun library. Outside the grader,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const repoRoot = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Copy a directory only when the source exists, so a missing screenshots/
// folder fails loudly later in buildDossier instead of here in silence.
function copyTree(source, target) {
  if (!existsSync(source)) return;
  cpSync(source, target, { recursive: true });
}

mkdirSync(outputDir, { recursive: true });
copyTree(join(repoRoot, 'game'), join(outputDir, 'game'));
mkdirSync(join(outputDir, 'screenshots'), { recursive: true });
copyTree(join(repoRoot, 'screenshots'), join(outputDir, 'screenshots'));

// The gate's caps: only text_max_bytes shapes the dossier's bytes; the rest
// refuse an entry the scorer would refuse (too many or too large
// screenshots; a game/ past 993 entries or 48 MiB; a path over 1000 bytes).
writeFileSync(
  join(outputDir, 'dossier.json'),
  buildDossier(outputDir, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    game_max_files: 993,
    game_max_bytes: 50331648,
    game_path_max_bytes: 1000,
  }),
);
