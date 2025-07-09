import React from 'react';

import './StageBanner.scss';

const StageBanner = () => {
  return (
    <div className="stage-banner">
      <h2>Offrez-vous une parenthèse hors du temps.</h2>
      <p>
        Je propose plusieurs fois par an des <strong>stages de 1 à 3 jours</strong> dans des lieux ressourçants, en
        pleine nature, à 1h30-2h30 de Saint-Raphaël.
        <br />
        Ces temps sont pensés pour permettre une vraie reconnexion à soi : par le corps, le souffle, les sons et le
        silence.
        <br />
        <br />
        <span className="stage-banner-text">
          <span role="img" aria-label="main">
            👉
          </span>{' '}
          Pour recevoir le programme des prochains stages, laissez-moi votre e-mail, ou suivez-moi sur les réseaux.
        </span>
      </p>
    </div>
  );
};
export default StageBanner;
