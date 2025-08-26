import matter from 'gray-matter';

export function getArticles() {
  const context = require.context('../content/articles', false, /\.md$/);

  return Promise.all(
    context.keys().map(async (key) => {
      try {
        // Extraire le slug du nom de fichier
        const slug = key.replace(/^\.\/(.*).md$/, '$1');

        // Charger le contenu brut du fichier markdown
        const content = await import(`../content/articles/${slug}.md`);

        // Parser le contenu avec gray-matter
        const { data: frontmatter, content: markdownContent } = matter(content.default);

        return {
          slug,
          title: frontmatter.title,
          date: frontmatter.date,
          image: frontmatter.image,
          content: markdownContent
        };
      } catch (error) {
        console.error(`Error loading article ${key}:`, error);
        return null;
      }
    })
  ).then((articles) =>
    articles.filter((article) => article !== null).sort((a, b) => new Date(b.date) - new Date(a.date))
  );
}
