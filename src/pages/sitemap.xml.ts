import type { APIRoute } from 'astro';
import { allPlatforms } from '../lib/data';

const SITE = 'https://cya.badjoke-lab.com';
const staticPaths = [
  '/',
  '/platforms/',
  '/compare/',
  '/outcomes/',
  '/bankruptcy-cases/',
  '/failures/',
  '/terms-risk/',
  '/timeline/',
  '/stats/',
  '/source-quality/',
  '/methodology/',
  '/about/',
  '/corrections/',
  '/support/',
];

function validDate(value: unknown): string | null {
  const text = String(value ?? '').trim();
  return /^\d{4}-\d{2}-\d{2}$/.test(text) ? text : null;
}

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function buildUrl(path: string, lastmod: string, priority: string, changefreq: string) {
  return [
    '  <url>',
    `    <loc>${escapeXml(`${SITE}${path}`)}</loc>`,
    `    <lastmod>${escapeXml(lastmod)}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

export const GET: APIRoute = () => {
  const registryLastmod = allPlatforms
    .map((platform) => validDate(platform.last_verified_at))
    .filter((value): value is string => Boolean(value))
    .sort()
    .at(-1) ?? '2026-08-05';

  const urls = [
    ...staticPaths.map((path) => buildUrl(path, registryLastmod, path === '/' ? '1.0' : '0.8', 'weekly')),
    ...allPlatforms.map((platform) => buildUrl(
      `/platform/${platform.slug}/`,
      validDate(platform.last_verified_at) ?? registryLastmod,
      '0.7',
      'monthly',
    )),
  ].join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
};
