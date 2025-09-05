/*
 * Génère une page HTML statique par article markdown afin que Facebook / LinkedIn (qui ne rendent pas le JS) récupèrent
 * correctement les meta OG (titre, description, image) et l'URL canonique de l'article.
 * Les fichiers sont créés sous: public/blog/<slug>/index.html avant le build Vite.
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const BASE_URL = process.env.VITE_SITE_URL || 'https://liberationducorpsetdelesprit.fr';
const SRC_ARTICLES_DIR = path.join(process.cwd(), 'src', 'content', 'articles');
const PUBLIC_BLOG_DIR = path.join(process.cwd(), 'public', 'blog');

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
  const safeBody = `<article class=\"ssr-article\"><h1>${escapeHtml(title)}</h1><p>${escapeHtml(
    description
  )}</p><p><a href=\"/\">Accueil</a></p></article>`;

  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(pageTitle)}</title>
    <link rel="canonical" href="${canonical}" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta property="og:title" content="${escapeHtml(pageTitle)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${ogImage}" />
    ${date ? `<meta property=\"article:published_time\" content=\"${date}\" />` : ''}
    <meta property="og:site_name" content="Libération du Corps et de l’Esprit" />
    <meta property="og:locale" content="fr_FR" />
    ${date ? `<meta property="article:published_time" content="${date}" />` : ''}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(pageTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${ogImage}" />
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <script>
      // Charge dynamiquement le bundle Vite généré (premier script type=module trouvé dans /index.html)
      (function(){
        fetch('/index.html').then(r=>r.text()).then(html=>{
          const scripts=[...html.matchAll(/<script[^>]+type=\\"module\\"[^>]+src=\\"([^\\"]+)\\"/g)];
          if(scripts.length){
            const main=scripts[0][1];
            const s=document.createElement('script');
            s.type='module';
            s.src=main;
            document.body.appendChild(s);
          }
        }).catch(()=>{});
      })();
    </script>
  </head>
  <body>
    <div id="root">${safeBody}</div>
  </body>
</html>`;
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
  ensureDir(PUBLIC_BLOG_DIR);

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
      const outDir = path.join(PUBLIC_BLOG_DIR, slug);
      ensureDir(outDir);
      fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
      count++;
    } catch (e) {
      console.error('Erreur génération pour', file, e);
    }
  });
  console.log(`Pages articles générées: ${count}`);
}

run();
