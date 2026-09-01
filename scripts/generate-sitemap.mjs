import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const site = 'https://aduratools.site';
const now = '2026-09-01';

const categories = [
  'developer-tools',
  'text-tools',
  'calculators-math',
  'unit-converters',
  'image-tools',
  'seo-web-tools',
  'security-privacy',
];

const tools = [
  'json-formatter','base64-encoder','jwt-decoder','url-encoder','regex-tester','html-entity-encoder','hash-generator','uuid-generator','timestamp-converter','css-js-minifier','word-counter','case-converter','lorem-ipsum','text-diff','slug-generator','duplicate-remover','text-reverser','whitespace-remover','percentage-calculator','compound-interest-calculator','bmi-calculator','age-calculator','mortgage-calculator','unit-converter','color-converter','number-base-converter','image-compressor','image-resizer','image-converter','meta-tag-generator','serp-preview','robots-txt-generator','password-generator','qr-code-generator'
];

const publicPages = [
  '/',
  '/all-tools',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  ...categories.map((slug) => `/categories/${slug}`),
  ...tools.map((slug) => `/tools/${slug}`),
];

const entries = publicPages.map((path) => {
  const priority = path === '/' ? '1.0' : path === '/all-tools' ? '0.9' : '0.8';
  return `  <url>\n    <loc>${site}${path}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

fs.writeFileSync(path.join(rootDir, 'public', 'sitemap.xml'), xml, 'utf8');
console.log(`Generated sitemap.xml with ${publicPages.length} URLs`);
