import type { APIRoute } from 'astro';
import { allPlatforms } from '../lib/data';

const SITE = 'https://cya.badjoke-lab.com';

export const GET: APIRoute = () => {
  const staticPaths = ['', 'outcomes/', 'bankruptcy-cases/', 'source-quality/', 'methodology/', 'about/'];
  const platformPaths = allPlatforms.map((platform) => `platform/${platform.slug}/`);
  const urls = [...staticPaths, ...platformPaths]
    .map((path) => `  <url><loc>${SITE}/${path}</loc></url>`)
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
