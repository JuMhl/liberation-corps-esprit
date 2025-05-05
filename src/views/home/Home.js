import React from 'react';
import logo from '../../assets/logo-2025.png';

import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img src={logo} className="home-logo" alt="logo" />
        <div className="home-text">
          <p>
            Je suis Catherine Charleux, thérapeute, spécialisée dans la gestion du stress et l'accompagnement des femmes
            en quête d'apaisement, de reconnexion et de transformation.
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
    </div>
  );
};
export default Home;
