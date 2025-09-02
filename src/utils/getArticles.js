import matter from 'gray-matter';

// Vite replacement for webpack require.context using import.meta.glob
export function getArticles() {
  const modules = import.meta.glob('../content/articles/*.md', { query: '?raw', import: 'default' });

  return Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      try {
        const slug = path.split('/').pop().replace(/\.md$/, '');
        const raw = await loader();
        const parsed = matter(raw || '');
        const frontmatter = parsed.data || {};
        const markdownContent = parsed.content || '';
        return {
          slug,
          title: frontmatter.title,
          date: frontmatter.date,
          image: frontmatter.image,
          content: markdownContent
        };
      } catch (error) {
        console.error(`Error loading article ${path}:`, error);
        return null;
      }
    })
  ).then((articles) =>
    articles.filter((article) => article !== null).sort((a, b) => new Date(b.date) - new Date(a.date))
  );
}
