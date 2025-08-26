import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './Blog.scss';

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const content = await import(`../../content/articles/${slug}.md`);

        if (!content) {
          throw new Error('Article non trouvé');
        }

        setArticle({
          title: content.attributes?.title,
          date: content.attributes?.date,
          image: content.attributes?.image,
          gallery: content.attributes?.gallery || [],
          content: content.body || ''
        });
      } catch (error) {
        console.error('Error loading article:', error);
        setError('Article non trouvé');
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  if (loading) {
    return (
      <div className="article-page">
        <div className="loading">Chargement de l'article...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="article-page">
        <div className="error">
          <h2>Erreur</h2>
          <p>{error}</p>
          <button onClick={() => navigate('/blog')}>Retourner au blog</button>
        </div>
      </div>
    );
  }

  if (!article || !article.metadata) {
    return (
      <div className="article-page">
        <div className="error">
          <h2>Article non disponible</h2>
          <button onClick={() => navigate('/blog')}>Retourner au blog</button>
        </div>
      </div>
    );
  }

  return (
    <div className="article-page">
      {article.image && (
        <div className="article-header-image">
          <img src={article.image} alt={article.title || ''} />
        </div>
      )}
      <div className="article-content">
        <h1>{article.title || 'Sans titre'}</h1>
        <p className="date">{formatDate(article.date)}</p>
        <ReactMarkdown>{article.content}</ReactMarkdown>

        {article.gallery && article.gallery.length > 0 && (
          <div className="article-gallery">
            <h2>Galerie</h2>
            <div className="gallery-grid">
              {article.gallery.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt="" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
