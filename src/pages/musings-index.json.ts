import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Static build-time full-text index: stripped, truncated, lowercased article
// bodies keyed by slug. Musings.astro lazy-fetches this on first search focus,
// so the homepage stays lean and only searchers pay the (gzipped ~80KB) load.
export const GET: APIRoute = async () => {
  const entries = await getCollection('musings', ({ data }) => !data.draft && !data.external);
  const index = entries.map((e) => ({
    id: e.id,
    text: (e.body ?? '')
      .replace(/```[\s\S]*?```/g, ' ') // fenced code
      .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> label
      .replace(/<[^>]+>/g, ' ') // html tags
      .replace(/[#>*_`~|]/g, ' ') // md punctuation
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 5000)
      .toLowerCase(),
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
