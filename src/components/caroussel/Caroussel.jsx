import React, { useState } from 'react';
import './Caroussel.scss';
const Caroussel = ({ images, title = 'Témoignages' }) => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  const toImageObj = (img, idx) => {
    if (typeof img === 'string') {
      const file = (img.split('/')?.pop() || '').split('?')[0];
      const base = file
        .replace(/\.[a-zA-Z0-9]+$/, '')
        .replace(/[._-]+/g, ' ')
        .trim();
      const human = base ? base.charAt(0).toUpperCase() + base.slice(1) : '';
      return { src: img, alt: human || `${title || 'Image'} ${idx + 1}` };
    }
    const src = img?.src || img?.url || '';
    const alt = img?.alt || img?.title || `${title || 'Image'} ${idx + 1}`;
    return { src, alt };
  };

  const currentImg = toImageObj(images[current], current);
  return (
    <div className="caroussel-container">
      <h2 className="caroussel-title">{title}</h2>
      <div className="custom-carousel">
        <button className="caroussel-arrow left" onClick={prev} aria-label="Précédent">
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
        <img src={currentImg.src} className="caroussel-img" alt={currentImg.alt} />
        <button className="caroussel-arrow right" onClick={next} aria-label="Suivant">
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
      <div className="caroussel-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`caroussel-dot${idx === current ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};
export default Caroussel;
