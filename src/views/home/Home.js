import React from 'react';
import StageBanner from '../../components/stage-banner/StageBanner';
import logo from '../../assets/logos/logo-2025.png';
import portraitAcceuil from '../../assets/photos/portrait-zen-esterel.jpg';
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
            Je suis Catherine Charleux, spécialisée dans la gestion du stress et l'accompagnement des personnes en quête
            d'apaisement, de reconnexion et de transformation.
          </p>
          <p>
            J'accueille celles qui traversent une période de mal-être, de fatigue émotionnelle ou de perte de sens, et
            je les guide avec douceur vers un mieux-être global.
          </p>
          <p>
            Chaque rendez-vous est une bulle de présence, une pause bienveillante pour revenir à soi, relâcher les
            tensions et laisser émerger ce qui a besoin d'être entendu, accueilli et transformé.
          </p>
        </div>
      </div>
      <StageBanner />
    </div>
  );
};
export default Home;
