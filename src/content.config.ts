import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const musings = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/musings' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(240).optional(),
    date: z.coerce.date(),
    venue: z.enum(['wagmi', 'boiler', 'personal']),
    tags: z.array(z.string()),
    subtags: z.array(z.string()).optional(),
    tickers: z.array(z.string()).optional(),
    research: z.boolean().default(false),
    featured: z.boolean().default(false),
    external: z.string().url().optional(),
    draft: z.boolean().default(false),
  }).refine((d) => !(d.featured && d.external), {
    message: 'featured cannot be combined with external — the ★ strip only links internal routes, so the flag would be silently ignored',
  }),
});

export const collections = { musings };
