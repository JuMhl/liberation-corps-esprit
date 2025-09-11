import matter from 'gray-matter';

export function getProgrammes() {
  const modules = import.meta.glob('../content/programme/*.md', { query: '?raw', import: 'default' });

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
          content: markdownContent,
          image: frontmatter.image
        };
      } catch (error) {
        console.error(`Error loading programme ${path}:`, error);
        return null;
      }
    })
  ).then((programmes) =>
    programmes.filter((programme) => programme !== null).sort((a, b) => new Date(b.date) - new Date(a.date))
  );
}
