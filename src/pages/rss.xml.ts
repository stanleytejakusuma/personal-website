import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_DESC } from '../consts';

const FEED_TITLE = 'Stanley Tejakusuma — musings';

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const GET: APIRoute = async (context) => {
  const site = context.site ?? new URL('https://stanleytejakusuma.com');
  const entries = (
    await getCollection('musings', ({ data }) => (import.meta.env.PROD ? !data.draft : true))
  ).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const items = entries.map((entry) => {
    const link = entry.data.external ?? `/musings/${entry.id}/`;
    const href = new URL(link, site).href;
    const description = entry.data.description ?? '';

    return [
      '    <item>',
      `      <title>${escapeXml(entry.data.title)}</title>`,
      `      <link>${escapeXml(href)}</link>`,
      `      <guid>${escapeXml(href)}</guid>`,
      `      <pubDate>${entry.data.date.toUTCString()}</pubDate>`,
      `      <description>${escapeXml(description)}</description>`,
      '    </item>',
    ].join('\n');
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    '  <channel>',
    `    <title>${escapeXml(FEED_TITLE)}</title>`,
    `    <link>${escapeXml(site.href)}</link>`,
    `    <description>${escapeXml(SITE_DESC)}</description>`,
    ...items,
    '  </channel>',
    '</rss>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
};
