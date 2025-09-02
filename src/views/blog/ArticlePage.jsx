import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';
import Caroussel from '@/components/caroussel/Caroussel.jsx';
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
        const raw = await import(`../../content/articles/${slug}.md?raw`);
        const { data: frontmatter, content: markdownContent } = matter(raw.default || raw);
        if (!frontmatter) throw new Error('Article non trouvé');
        setArticle({ title: frontmatter.title, date: frontmatter.date, image: frontmatter.image, gallery: frontmatter.gallery || [], content: markdownContent });
      } catch (error) {
        console.error('Error loading article:', error);
        setError('Article non trouvé');
      } finally { setLoading(false); }
    };
    loadArticle();
  }, [slug]);
  const formatDate = d => d ? new Date(d).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
  if (loading) return <div className="article-page"><div className="loading">Chargement de l'article...</div></div>;
  if (error) return <div className="article-page"><div className="error"><h2>Erreur</h2><p>{error}</p><button onClick={() => navigate('/blog')}>Retourner au blog</button></div></div>;
  if (!article) return <div className="article-page"><div className="error"><h2>Article non disponible</h2><button onClick={() => navigate('/blog')}>Retourner au blog</button></div></div>;
  return (
    <div className="article-page">
      {article.image && <div className="article-header-image"><img src={article.image} alt={article.title || ''} /></div>}
      <div className="article-content">
        <h1>{article.title || 'Sans titre'}</h1>
        <p className="date">{formatDate(article.date)}</p>
        <ReactMarkdown>{article.content}</ReactMarkdown>
        {article.gallery && article.gallery.length > 0 && <div className="article-gallery"><h2>Galerie</h2><Caroussel images={article.gallery} title="" /></div>}
      </div>
      <div className="back-to-blog"><Link to="/blog">Revenir au blog</Link></div>
    </div>
  );
};
export default ArticlePage;
