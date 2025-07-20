import React, { useState } from 'react';
import './WitnessCaroussel.scss';

import img1 from '../../../assets/temoignages/20250619_093341.jpg';
import img2 from '../../../assets/temoignages/20250619_093446.jpg';
import img3 from '../../../assets/temoignages/20250619_093511.jpg';
import img4 from '../../../assets/temoignages/Screenshot_20240625-113754_Facebook.jpg';
import img5 from '../../../assets/temoignages/Screenshot_20240716-202143_WhatsApp.jpg';
import img6 from '../../../assets/temoignages/Screenshot_20250619-093218_Google.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const WitnessCaroussel = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="witness-caroussel-container">
      <h2 className="witness-title">Témoignages</h2>
      <div className="witness-custom-carousel">
        <button className="witness-arrow left" onClick={prev} aria-label="Précédent">
          {/* Flèche SVG gauche */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15.5 19L9.5 12L15.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <img src={images[current]} className="witness-img" alt={`Témoignage ${current + 1}`} />
        <button className="witness-arrow right" onClick={next} aria-label="Suivant">
          {/* Flèche SVG droite */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M8.5 5L14.5 12L8.5 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="witness-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`witness-dot${idx === current ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default WitnessCaroussel;
