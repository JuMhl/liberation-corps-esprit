/*
 * Génère une page HTML statique par article markdown (Open Graph / Twitter / LinkedIn).
 * Deux modes:
 *  - Pré-build (par défaut): pages minimalistes avec meta (pas d'injection d'assets encore inconnus).
 *  - Post-build (--afterBuild): réécrit les pages en injectant les assets (link rel=stylesheet + script type=module) extraits de dist/index.html.
 * Ajoute og:site_name, og:locale, article:published_time, et fb:app_id (si présent dans l'env: VITE_FB_APP_ID ou FB_APP_ID).
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BASE_URL = process.env.VITE_SITE_URL || 'https://liberationducorpsetdelesprit.fr';
const SRC_ARTICLES_DIR = path.join(process.cwd(), 'src', 'content', 'articles');
const PUBLIC_BLOG_DIR = path.join(process.cwd(), 'public', 'blog');
const DIST_DIR = path.join(process.cwd(), 'build'); // outDir défini dans vite.config.js
const AFTER_BUILD = process.argv.includes('--afterBuild');
// Répertoire de sortie: avant build -> public/blog (copié ensuite par Vite), après build -> dist/blog (pages finales avec assets)
const OUTPUT_BLOG_DIR = AFTER_BUILD ? path.join(DIST_DIR, 'blog') : PUBLIC_BLOG_DIR;
const FB_APP_ID = process.env.VITE_FB_APP_ID || process.env.FB_APP_ID; // optionnel

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function stripMarkdown(md) {
  if (!md) return '';
  return md
    .replace(/`{3}[\s\S]*?`{3}/g, ' ') // code blocks
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ') // links
    .replace(/[#>*_~`>-]+/g, ' ') // markdown tokens
    .replace(/\r?\n+/g, ' ') // new lines
    .replace(/\s+/g, ' ') // collapse
    .trim();
}

function extractBuiltAssets() {
  if (!AFTER_BUILD) return null;
  const distIndex = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(distIndex)) return null;
  const html = fs.readFileSync(distIndex, 'utf8');
  const headLinks = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)].map((m) => m[0]);
  const moduleScripts = [...html.matchAll(/<script[^>]+type="module"[^>]*><\/script>/g)].map((m) => m[0]);
  return { headLinks, moduleScripts };
}

const builtAssets = extractBuiltAssets();
let baseIndexHtml = null;
if (AFTER_BUILD) {
  const idx = path.join(DIST_DIR, 'index.html');
  if (fs.existsSync(idx)) baseIndexHtml = fs.readFileSync(idx, 'utf8');
}

function buildHtml({ slug, title, description, image, date }) {
  const canonical = `${BASE_URL.replace(/\/$/, '')}/blog/${slug}`;
  const ogImage = image?.startsWith('http')
    ? image
    : image
    ? `${BASE_URL.replace(/\/$/, '')}${image.startsWith('/') ? image : '/' + image}`
    : `${BASE_URL.replace(/\/$/, '')}/logo-2025.png`;
  const pageTitle = `${title} | Libération du Corps et de l’Esprit`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: date,
    image: ogImage,
    author: { '@type': 'Person', name: 'Catherine Charleux' },
    mainEntityOfPage: canonical
  };
  const safeBody = `<article class=\"ssr-article\"><h1>${escapeHtml(title)}</h1><p>${escapeHtml(description)}</p></article>`;
  if (AFTER_BUILD && baseIndexHtml) {
    let html = baseIndexHtml;
    // Title
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(pageTitle)}</title>`);
    // Canonical
    html = html.replace(/<link[^>]+rel="canonical"[^>]*>/i, `<link rel=\"canonical\" href=\"${canonical}\" />`);
    // Remove existing dynamic metas (description + og + twitter + article + fb)
    html = html.replace(/\n?\s*<meta[^>]+(name|property)="(description|og:[^"]+|twitter:[^"]+|article:[^"]+|fb:app_id)"[^>]*>/g, '');
    // Inject after title
    const metas = [
      `<meta name=\"description\" content=\"${escapeHtml(description)}\" />`,
      `<meta property=\"og:site_name\" content=\"Libération du Corps et de l’Esprit\" />`,
      `<meta property=\"og:locale\" content=\"fr_FR\" />`,
      `<meta property=\"og:title\" content=\"${escapeHtml(pageTitle)}\" />`,
      `<meta property=\"og:description\" content=\"${escapeHtml(description)}\" />`,
      `<meta property=\"og:type\" content=\"article\" />`,
      `<meta property=\"og:url\" content=\"${canonical}\" />`,
      `<meta property=\"og:image\" content=\"${ogImage}\" />`,
      date ? `<meta property=\"article:published_time\" content=\"${escapeHtml(date)}\" />` : null,
      FB_APP_ID ? `<meta property=\"fb:app_id\" content=\"${FB_APP_ID}\" />` : null,
      `<meta name=\"twitter:card\" content=\"summary_large_image\" />`,
      `<meta name=\"twitter:title\" content=\"${escapeHtml(pageTitle)}\" />`,
      `<meta name=\"twitter:description\" content=\"${escapeHtml(description)}\" />`,
      `<meta name=\"twitter:image\" content=\"${ogImage}\" />`,
      `<script type=\"application/ld+json\">${JSON.stringify(jsonLd)}<\/script>`
    ].filter(Boolean).join('\n    ');
    html = html.replace(/<title>[\s\S]*?<\/title>/i, (m) => `${m}\n    ${metas}`);
    // Root placeholder SSR minimal
    html = html.replace(/<div id=\"root\"><\/div>/, `<div id=\"root\">${safeBody}</div>`);
    return html;
  }
  // Fallback (pre-build)
  return `<!doctype html>\n<html lang=\"fr\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>${escapeHtml(pageTitle)}</title>\n    <link rel=\"canonical\" href=\"${canonical}\" />\n    <meta name=\"description\" content=\"${escapeHtml(description)}\" />\n    <meta property=\"og:site_name\" content=\"Libération du Corps et de l’Esprit\" />\n    <meta property=\"og:locale\" content=\"fr_FR\" />\n    <meta property=\"og:title\" content=\"${escapeHtml(pageTitle)}\" />\n    <meta property=\"og:description\" content=\"${escapeHtml(description)}\" />\n    <meta property=\"og:type\" content=\"article\" />\n    <meta property=\"og:url\" content=\"${canonical}\" />\n    <meta property=\"og:image\" content=\"${ogImage}\" />\n    ${date ? `<meta property=\\"article:published_time\\" content=\\"${escapeHtml(date)}\\" />` : ''}\n    ${FB_APP_ID ? `<meta property=\\"fb:app_id\\" content=\\"${FB_APP_ID}\\" />` : ''}\n    <meta name=\"twitter:card\" content=\"summary_large_image\" />\n    <meta name=\"twitter:title\" content=\"${escapeHtml(pageTitle)}\" />\n    <meta name=\"twitter:description\" content=\"${escapeHtml(description)}\" />\n    <meta name=\"twitter:image\" content=\"${ogImage}\" />\n    <script type=\"application/ld+json\">${JSON.stringify(jsonLd)}<\/script>\n  </head>\n  <body>\n    <div id=\"root\">${safeBody}</div>\n  </body>\n</html>`;
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function run() {
  if (!fs.existsSync(SRC_ARTICLES_DIR)) {
    console.warn('Aucun dossier articles trouvé:', SRC_ARTICLES_DIR);
    return;
  }
  ensureDir(OUTPUT_BLOG_DIR);

  const files = fs.readdirSync(SRC_ARTICLES_DIR).filter((f) => f.endsWith('.md'));
  let count = 0;
  files.forEach((file) => {
    try {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(SRC_ARTICLES_DIR, file), 'utf8');
      const { data, content } = matter(raw);
      if (!data.title) return; // skip si pas de titre
      const desc = stripMarkdown(content).slice(0, 180);
      const html = buildHtml({
        slug,
        title: data.title,
        description: desc,
        image: data.image,
        date: data.date
      });
      const outDir = path.join(OUTPUT_BLOG_DIR, slug);
      ensureDir(outDir);
      fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
      count++;
    } catch (e) {
      console.error('Erreur génération pour', file, e);
    }
  });
  console.log(`Pages articles générées (${AFTER_BUILD ? 'post-build' : 'pre-build'}): ${count}`);
}

run();
