import React from 'react';
import './CardsAccompaniement.scss';

import harmonisation from '../../assets/photos/harmonisation.png';
import voyage from '../../assets/photos/voyage.png';
import premium from '../../assets/photos/premium.png';

const cards = [
  {
    title: 'Harmonisation du corps et de l’esprit',
    image: harmonisation,
    link: '#harmonisation'
  },
  {
    title: 'Voyages sonores & massages aux bols',
    image: voyage,
    link: '#voyages'
  },
  {
    title: 'Accompagnement Personalisé',
    image: premium,
    link: '#premium'
  }
];

const CardsAccompaniement = () => (
  <div className="cards-accompaniement">
    <h2 className="accompaniement-main-title">Les accompagnements proposés</h2>
    <div className="cards-container">
      {cards.map((card, idx) => (
        <div className="accompaniement-card" key={idx} style={{ backgroundImage: `url(${card.image})` }}>
          <div className="accompaniement-card-content">
            <h3>{card.title}</h3>
            <a href={card.link} className="accompaniement-btn">
              En savoir plus
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CardsAccompaniement;
