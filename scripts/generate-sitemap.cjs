#!/usr/bin/env node
/**
 * Simple sitemap generator scanning src/content/articles and programme + static routes.
 */
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.SITE_URL || 'https://liberationducorpsetdelesprit.fr';

const staticRoutes = [
  '/',
  '/programme',
  '/a-propos',
  '/accompagnements',
  '/blog',
  '/kateri-creations',
  '/contact',
  // Pages services
  '/relaxation-biodynamique-frejus-saint-raphael',
  '/voyage-sonore-meditatif-frejus',
  '/massage-bol-tibetain-var',
  '/sonotherapie-stress-anxiete'
];

function scanContent(dir) {
  const abs = path.join(process.cwd(), 'src', 'content', dir);
  if (!fs.existsSync(abs)) return [];
  return fs
    .readdirSync(abs)
    .filter((f) => f.endsWith('.md'))
    .map((file) => `/${dir}/${file.replace(/\.md$/, '')}`);
}

const articleRoutes = scanContent('articles').map((r) => r.replace(/^\/articles\//, '/blog/'));
const programmeRoutes = scanContent('programme').map((r) => r.replace(/^\/programme\//, '/programme/'));

const urls = [...new Set([...staticRoutes, ...articleRoutes, ...programmeRoutes])];

const lastmod = new Date().toISOString();

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
  urls
    .map(
      (u) =>
        `\n  <url>\n    <loc>${BASE_URL.replace(
          /\/$/,
          ''
        )}${u}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${
          u === '/' ? 'weekly' : 'monthly'
        }</changefreq>\n    <priority>${u === '/' ? '1.0' : '0.6'}</priority>\n  </url>`
    )
    .join('') +
  '\n</urlset>\n';

const outDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8');
console.log(`Sitemap generated with ${urls.length} URLs.`);
