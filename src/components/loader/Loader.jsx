import React from 'react';
import './Loader.scss';
import dreamCatcher from '../../assets/dream-catcher.png';

/* Loader simplifié (variante unique "dream")
 * Props:
 *  - fullscreen: affichage en plein écran (overlay)
 *  - text: message optionnel
 */
const Loader = ({ fullscreen = false, text = 'Chargement...' }) => {
  return (
    <div className={`loader-wrapper ${fullscreen ? 'fullscreen' : ''}`}>
      <div className="loader-content">
        <div className="image-wrapper dream">
          <img src={dreamCatcher} alt="loader" loading="eager" />
          <div className="pulse-circle" />
        </div>
        {text && <p className="loader-text">{text}</p>}
      </div>
    </div>
  );
};

export default Loader;
