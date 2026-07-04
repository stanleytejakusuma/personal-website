import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Map each musing slug -> its written date (from frontmatter, sourced from the
// research-database xlsx) so the sitemap can emit an accurate <lastmod>.
const musingsDir = fileURLToPath(new URL('./src/content/musings', import.meta.url));
const lastmodBySlug = {};
for (const file of readdirSync(musingsDir)) {
  if (!file.endsWith('.md')) continue;
  const m = readFileSync(`${musingsDir}/${file}`, 'utf8').match(/^date:\s*['"]?(\d{4}-\d{2}-\d{2})/m);
  if (m) lastmodBySlug[file.replace(/\.md$/, '')] = new Date(m[1]).toISOString();
}

export default defineConfig({
  output: 'static',
  site: 'https://stanleytejakusuma.com',
  integrations: [
    sitemap({
      serialize(item) {
        const slug = item.url.match(/\/musings\/([^/]+)\/?$/);
        if (slug && lastmodBySlug[slug[1]]) item.lastmod = lastmodBySlug[slug[1]];
        return item;
      },
    }),
  ],
});
