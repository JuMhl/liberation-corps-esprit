import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.scss';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const context = require.context('../../content/articles', false, /\.md$/);
        const articles = await Promise.all(
          context.keys().map(async (key) => {
            try {
              // Extraire le nom du fichier (slug) du chemin
              const slug = key.replace(/^\.\/(.*).md$/, '$1');

              // Charger le contenu du fichier markdown
              const content = await import(`../../content/articles/${slug}.md`);
              const frontmatter = content.attributes || {};

              return {
                slug,
                title: frontmatter.title,
                date: frontmatter.date,
                image: frontmatter.image,
                gallery: frontmatter.gallery || [],
                content: content.body || ''
              };
            } catch (error) {
              console.error(`Error loading article:`, error);
              return null;
            }
          })
        );

        // Filtrer les articles nuls et trier par date
        const validArticles = articles
          .filter((article) => article !== null)
          .sort((a, b) => new Date(b.date) - new Date(a.date));

        setArticles(validArticles);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  if (loading) {
    return (
      <div className="blog">
        <h1>Blog</h1>
        <div className="loading">Chargement des articles...</div>
      </div>
    );
  }

  return (
    <div className="blog">
      <h1>Blog</h1>
      <div className="articles-grid">
        {articles.length === 0 ? (
          <div className="no-articles">Aucun article disponible pour le moment.</div>
        ) : (
          articles.map((article, index) => (
            <Link to={`/blog/${article.slug}`} key={index} className="article-card">
              {article.image && (
                <div className="article-image">
                  <img src={article.image} alt={article.title || ''} />
                </div>
              )}
              <div className="article-info">
                <h2>{article.title || 'Sans titre'}</h2>
                <p className="date">{formatDate(article.date)}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
