// Generates public/og.png (1200x630) from an SVG via sharp (already installed
// as the astro:assets backend). Run: node scripts/make-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="38%" cy="44%" r="55%">
      <stop offset="0%" stop-color="#5EEAD4" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#5EEAD4" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0A0B0D"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <text x="90" y="250" font-family="'JetBrains Mono','DejaVu Sans Mono',monospace" font-size="34" fill="#7A828C">@stanleytejakusuma</text>
  <text x="86" y="340" font-family="'JetBrains Mono','DejaVu Sans Mono',monospace" font-size="78" font-weight="700" fill="#E8E9EC">stanley_tejakusuma</text>
  <text x="90" y="410" font-family="'JetBrains Mono','DejaVu Sans Mono',monospace" font-size="30" fill="#7A828C">data · statistics · modeling · the tools that act on it</text>
  <rect x="90" y="470" width="120" height="5" rx="2.5" fill="#5EEAD4"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(join(root, 'public', 'og.png'));
console.log('og.png written');
