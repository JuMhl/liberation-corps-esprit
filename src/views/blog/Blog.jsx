import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getArticles } from '@/utils/getArticles';
import './Blog.scss';
import SEO from '@/components/seo/SEO.jsx';
import Loader from '@/components/loader/Loader.jsx';
const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadArticles = async () => {
      try {
        const articles = await getArticles();
        const validArticles = articles.filter((a) => a !== null).sort((a, b) => new Date(b.date) - new Date(a.date));
        setArticles(validArticles);
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, []);
  const formatDate = (d) =>
    d ? new Date(d).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
  // Ancienne version supprimée (variant). On ne conserve que le nouveau rendu plus bas.
  if (loading) {
    return (
      <div className="blog">
        <span className="main-title">Blog</span>
        <Loader text="Chargement des articles..." />
      </div>
    );
  }
  return (
    <div className="blog">
      <SEO
        title="Blog sonothérapie & relaxation"
        description="Articles sur la gestion du stress, la sonothérapie, le voyage sonore, la relaxation profonde et l'harmonisation corps-esprit."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Blog sonothérapie',
          description: 'Articles bien-être et gestion du stress.'
        }}
      />
      <span className="main-title">Blog</span>
      <div className="articles-grid">
        {articles.length === 0 ? (
          <div className="no-articles">Aucun article disponible pour le moment.</div>
        ) : (
          articles.map((article, i) => (
            <Link to={`/blog/${article.slug}`} key={i} className="article-card">
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
