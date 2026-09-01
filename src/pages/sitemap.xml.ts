import type { APIRoute } from 'astro';
import { TOOLS } from '../data/tools';
import { CATEGORIES } from '../data/categories';

const site = 'https://aduratools.site';

const publicPages = [
  '/',
  '/all-tools',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  ...CATEGORIES.map((category) => `/categories/${category.slug}`),
];

const toolPages = TOOLS.map((tool) => `/tools/${tool.slug}`);

const urlEntries = [...new Set([...publicPages, ...toolPages])]
  .filter((path) => !path.includes('/api') && !path.includes('/admin') && !path.includes('/internal') && !path.includes('/tmp'))
  .map((path) => {
    const url = `${site}${path}`;
    return `  <url>\n    <loc>${url}</loc>\n    <lastmod>2026-09-01</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${path === '/' ? '1.0' : path === '/all-tools' ? '0.9' : '0.8'}</priority>\n  </url>`;
  });

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries.join('\n')}\n</urlset>\n`;

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
