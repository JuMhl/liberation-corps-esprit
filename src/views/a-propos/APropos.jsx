import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/seo/SEO.jsx';
import './APropos.scss';

const APropos = () => (
  <div className="a-propos">
    <SEO
      title="À propos"
      description="Découvrez Catherine et Philippe, praticiens en accompagnement, sonothérapie et bien-être à Fréjus."
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'À propos',
        description: 'À propos de Catherine et Philippe'
      }}
    />
    <div className="a-propos__container">
      <span className="main-title">À Propos</span>
      <div className="a-propos__chooser">
        <p className="a-propos__chooser-intro">Découvrez nos parcours et approches</p>
        <div className="a-propos__chooser-links">
          <Link to="/a-propos/catherine" className="a-propos__link a-propos__link--catherine">
            <h2>À propos de Catherine</h2>
            <p>Découvrir mon parcours en sonothérapie et relaxation</p>
          </Link>
          <Link to="/a-propos/philippe" className="a-propos__link a-propos__link--philippe">
            <h2>À propos de Philippe</h2>
            <p>Découvrir mon parcours en compréhension des énergies</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default APropos;
