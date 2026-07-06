// Post-build CSP hardening: replace 'unsafe-inline' in the script-src
// directive of dist/_headers with the sha256 hashes of every executable
// inline script Astro emitted. Runs as part of `npm run build`; the source
// public/_headers keeps 'unsafe-inline' so a generator failure degrades to
// the old (working, softer) policy instead of a broken site.
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist', import.meta.url).pathname;

const htmlFiles = [];
const walk = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name.endsWith('.html')) htmlFiles.push(p);
  }
};
walk(DIST);

const hashes = new Set();
const scriptRe = /<script([^>]*)>([\s\S]*?)<\/script>/g;
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const [, attrs, body] of html.matchAll(scriptRe)) {
    if (/\bsrc=/.test(attrs)) continue; // external — covered by origin allowlist
    if (/type="application\/(ld\+json|json)"/.test(attrs)) continue; // inert data block
    if (!body.trim()) continue;
    hashes.add(`'sha256-${createHash('sha256').update(body).digest('base64')}'`);
  }
}

if (hashes.size === 0) {
  console.error('csp-hashes: no inline scripts found — leaving _headers untouched');
  process.exit(1);
}

const headersPath = join(DIST, '_headers');
const headers = readFileSync(headersPath, 'utf8');
const updated = headers.replace(/^(\s*Content-Security-Policy:.*)$/m, (line) => {
  const directives = line.split(';').map((d) => {
    if (!d.trimStart().startsWith('script-src')) return d;
    return d.replace("'unsafe-inline'", [...hashes].sort().join(' '));
  });
  return directives.join(';');
});

if (updated === headers) {
  console.error('csp-hashes: script-src unsafe-inline not found in dist/_headers — nothing replaced');
  process.exit(1);
}

writeFileSync(headersPath, updated);
console.log(`csp-hashes: pinned ${hashes.size} inline-script hashes across ${htmlFiles.length} pages`);
