import React from 'react';

import './Programme.scss';

const Programme = () => {
  return (
    <div className="programme">
      <div className="programme-content">
        <div className="programme-text">
          <div className="activities">
            <h2>🌸 Au programme :</h2>
            <ul>
              <li>
                Des séances d'harmonisation du corps et de l'esprit, en salle ou au cœur de la nature, pour relâcher les
                tensions et retrouver l'unité intérieure.
              </li>
              <li>Des voyages sonores, véritables bains vibratoires, pour apaiser le mental et éveiller les sens.</li>
              <li>
                Une balade sensorielle, pour se reconnecter à soi et à la nature par les 5 sens. Écouter, sentir,
                toucher, voir, goûter, se connecter à ses émotions.
              </li>
              <li>Et des massages au bol en individuel, pour une détente profonde, au cabinet ou à domicile.</li>
            </ul>
          </div>

          <p className="note">
            ✨ Toutes les activités se font sur inscription, les places sont limitées pour préserver l'intimité et la
            qualité de chaque rencontre.
          </p>
        </div>

        <div className="programme-container">
          {/* <img src={programmeActuel} className="programme-sizing" alt="programme" /> */}
        </div>
      </div>
    </div>
  );
};

export default Programme;
