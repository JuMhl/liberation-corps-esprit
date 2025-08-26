import matter from 'gray-matter';

export function getProgrammes() {
  const context = require.context('../content/programme', false, /\.md$/);

  return Promise.all(
    context.keys().map(async (key) => {
      try {
        // Extraire le slug du nom de fichier
        const slug = key.replace(/^\.\/(.*).md$/, '$1');

        // Charger le contenu brut du fichier markdown
        const content = await import(`../content/programme/${slug}.md`);

        // Parser le contenu avec gray-matter
        const { data: frontmatter, content: markdownContent } = matter(content.default);

        return {
          slug,
          title: frontmatter.title,
          date: frontmatter.date,
          content: markdownContent,
          image: frontmatter.image
        };
      } catch (error) {
        console.error(`Error loading programme ${key}:`, error);
        return null;
      }
    })
  ).then((programmes) =>
    programmes.filter((programme) => programme !== null).sort((a, b) => new Date(b.date) - new Date(a.date))
  );
}
