#!/usr/bin/env node
/**
 * Simple sitemap generator scanning src/content/articles and programme + static routes.
 */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BASE_URL = process.env.SITE_URL || 'https://liberationducorpsetdelesprit.fr';

// Garder uniquement les routes réellement servies par React Router (voir App.jsx)
const staticRoutes = [
  '/',
  '/programme',
  '/a-propos',
  '/accompagnements',
  '/blog',
  '/kateri-creations',
  '/contact'
  // Pour ajouter plus tard des pages services, créer d'abord la page React puis rajouter ici.
];

/**
 * Scanne un dossier de contenu markdown et applique un filtrage frontmatter.
 * Critères génériques:
 *  - draft: true  => exclu
 *  - published: false => exclu
 *  - (optionnel) pour programme on peut exiger published: true si on veut contrôler finement.
 */
function scanContent(dir, { requirePublished = false } = {}) {
  const abs = path.join(process.cwd(), 'src', 'content', dir);
  if (!fs.existsSync(abs)) return [];

  return fs
    .readdirSync(abs)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const full = path.join(abs, file);
      let include = true;
      try {
        const raw = fs.readFileSync(full, 'utf8');
        const parsed = matter(raw || '');
        const fm = parsed.data || {};
        if (fm.draft === true) include = false;
        if (fm.published === false) include = false;
        if (requirePublished && fm.published !== true) include = false; // pour les programmes contrôle explicite
      } catch (e) {
        // En cas d'erreur parsing on exclut pour éviter URL vide
        include = false;
      }
      return include ? `/${dir}/${file.replace(/\.md$/, '')}` : null;
    })
    .filter(Boolean);
}

// Articles: mapping /articles/slug => /blog/slug
const articleRoutes = scanContent('articles').map((r) => r.replace(/^\/articles\//, '/blog/'));
// Programmes: on exige published: true pour éviter les brouillons ou placeholders
const programmeRoutes = scanContent('programme', { requirePublished: true }).map((r) =>
  r.replace(/^\/programme\//, '/programme/')
);

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
