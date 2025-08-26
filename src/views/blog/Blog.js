import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '../../utils/getArticles';
import './Blog.scss';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const articles = await getArticles();
        console.log(articles);
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
