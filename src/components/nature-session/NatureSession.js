import React from 'react';
import './NatureSession.scss';
import natureImg from '../../assets/photos/saintraphael-plage-debarquement.jpg';

const NatureSession = () => (
  <section className="nature-session">
    <div className="nature-session__content">
      <h2 className="nature-session__title">🌳 Séances en nature - Une autre façon de se retrouver</h2>
      <p className="nature-session__text">
        Et si le chemin du mieux-être passait aussi par la nature&nbsp;?
        <br />
        Quand les conditions s'y prêtent, je propose <strong>certains soins et séances en extérieur</strong>.
        <br />
        En forêt, près d'un ruisseau, sur une colline ou au bord de la mer…
        <br />
        Le cadre naturel soutient le relâchement, l'ancrage et la reconnexion.
        <br />
        Respirer, bouger, vibrer avec les sons dans un environnement vivant est une expérience profonde, simple et
        puissante.
      </p>
    </div>
    <div className="nature-session__image-block">
      <img src={natureImg} alt="Séance en nature à Saint-Raphaël" className="nature-session__image" />
    </div>
  </section>
);

export default NatureSession;
