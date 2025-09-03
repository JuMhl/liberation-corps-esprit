import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/button/Button.jsx';
import SEO from '@/components/seo/SEO.jsx';
import dreamCatcher from '@/assets/dream-catcher.png';
import './NotFound.scss';

const NotFound = () => {
  return (
    <main className="not-found" aria-labelledby="notfound-title">
      <SEO
        title="Page non trouvée"
        description="Erreur 404 - La page demandée est introuvable ou a été déplacée."
        noindex
        nofollow
      />
  <div className="not-found__inner container">
        <div className="not-found__visual" aria-hidden="true">
          <img src={dreamCatcher} alt="Décor attrape-rêves" loading="lazy" />
          <span className="not-found__glow" />
        </div>
        <div className="not-found__content">
          <h1 id="notfound-title" className="not-found__title">
            <span className="not-found__code" aria-hidden="true">404</span>
            Page introuvable
          </h1>
          <p className="not-found__text">
            La page que vous cherchez n'existe pas (ou plus). Elle a peut-être changé de nom,
            été déplacée… ou n'a jamais existé.
          </p>
          <div className="not-found__actions">
            <Button to="/" variant="primary">Retour à l'accueil</Button>
            <Button to="/contact" variant="secondary">Nous contacter</Button>
          </div>
          <nav className="not-found__shortcuts" aria-label="Navigation rapide">
            <ul>
              <li><Link to="/programme">Programme</Link></li>
              <li><Link to="/accompagnements">Accompagnements</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/kateri-creations">Kateri-Créations</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
