import React from 'react';

import logo from '../../assets/logos/logo-2025.png';
import portraitAcceuil from '../../assets/photos/portrait-zen-esterel.jpg';
import aquarelle from '../../assets/photos/aquarelle.jpg';

import StageBanner from '../../components/stage-banner/StageBanner';
import CardsAccompaniement from '../../components/cards-accompaniement/CardsAccompaniement';
import NatureSession from '../../components/nature-session/NatureSession';
import WitnessCaroussel from '../../components/witnesses-caroussel/WitnessesCaroussel';

import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <div className="home-photo-wrapper">
          <img src={portraitAcceuil} className="home-photo" alt="Catherine Charleux au bord de la mer" />
        </div>
      </div>
      <div className="home-container">
        <div className="home-text">
          <p>
            Spécialisée dans la gestion du <strong>stress</strong> et l'accompagnement des personnes en quête
            d'apaisement, j'accueille celles qui traversent une période de <strong>mal-être</strong>, de{' '}
            <strong>fatigue émotionnelle</strong> ou de <strong>perte de sens</strong>, et je les guide avec douceur{' '}
            <strong>vers un mieux-être global</strong>.
          </p>
          <p>
            Chaque rendez-vous est une bulle de présence,{' '}
            <strong>une pause bienveillante pour revenir à soi, relâcher les tensions</strong> et laisser émerger ce qui
            a besoin d'être entendu, accueilli et transformé.
          </p>
        </div>
      </div>
      <div
        className="home-aquarelle-bg-section"
        style={{
          backgroundImage: `url(${aquarelle})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="home-aquarelle-bg-text">
          <p>
            Il arrive un moment où l'on ne sait plus très bien où l'on va.
            <br />
            Où l'on porte trop, où l'on respire à moitié.
            <br />
            Dans ces instants-là, je tends la main.
          </p>
          <p>
            <strong>Mon rôle :</strong> ouvrir un passage doux entre le tumulte et la paix.
            <br />
            Un espace où l'on peut, enfin, se retrouver.
          </p>
          <p>Je guide les femmes en période de fatigue, de transition ou de trop-plein, vers un mieux-être global.</p>
          <p>
            Mon accompagnement les aide à relâcher les tensions du corps, à apaiser le mental, et à se reconnecter à qui
            elles sont profondément.
          </p>
          <p>
            Parce que j'ai moi-même traversé l'épuisement et le désalignement, j'ai à cœur de créer un espace doux, où
            l'on peut enfin respirer, déposer, et revenir à soi.
          </p>
          <p className="signature">Catherine Charleux</p>
        </div>
      </div>
      <CardsAccompaniement />
      <NatureSession />
      <StageBanner />
      <WitnessCaroussel />
    </div>
  );
};
export default Home;
