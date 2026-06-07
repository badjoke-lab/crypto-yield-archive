import type { APIRoute } from 'astro';
import { allPlatforms } from '../lib/data';

const SITE = 'https://cya.badjoke-lab.com';
const staticPaths = [
  '/',
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
];

function buildUrl(path: string, priority: string, changefreq: string) {
  return [
    '  <url>',
    `    <loc>${SITE}${path}</loc>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

export const GET: APIRoute = () => {
  const urls = [
    ...staticPaths.map((path) => buildUrl(path, path === '/' ? '1.0' : '0.8', 'weekly')),
    ...allPlatforms.map((platform) => buildUrl(`/platform/${platform.slug}/`, '0.7', 'monthly')),
  ].join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
