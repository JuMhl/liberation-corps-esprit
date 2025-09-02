import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '@/utils/getArticles';
import './Blog.scss';
const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadArticles = async () => {
      try {
        const articles = await getArticles();
        const validArticles = articles.filter(a => a !== null).sort((a, b) => new Date(b.date) - new Date(a.date));
        setArticles(validArticles);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally { setLoading(false); }
    };
    loadArticles();
  }, []);
  const formatDate = (d) => d ? new Date(d).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
  if (loading) return <div className="blog"><span className="main-title">Blog</span><div className="loading">Chargement des articles...</div></div>;
  return (
    <div className="blog">
      <span className="main-title">Blog</span>
      <div className="articles-grid">
        {articles.length === 0 ? <div className="no-articles">Aucun article disponible pour le moment.</div> :
          articles.map((article, i) => (
            <Link to={`/blog/${article.slug}`} key={i} className="article-card">
              {article.image && <div className="article-image"><img src={article.image} alt={article.title || ''} /></div>}
              <div className="article-info">
                <h2>{article.title || 'Sans titre'}</h2>
                <p className="date">{formatDate(article.date)}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Blog;
