import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import ContactButton from '../../components/contact-button/ContactButton';

import './Accompagnements.scss';

const idToIdx = {
  harmonisation: 0,
  voyages: 2,
  accompagnement: 3
};

const accompagnements = [
  {
    icon: '🌿',
    title: 'Harmonisation du corps et de l’esprit par la Relaxation bio-dynamique',
    description: (
      <>
        <strong>Un voyage intérieur pour libérer le corps et apaiser le mental</strong>
        <p>
          Lorsque le mental est saturé, le corps finit souvent par parler à sa place : tensions, fatigue chronique,
          respiration courte, boule au ventre, maux inexpliqués...
        </p>
        <p>
          La relaxation bio-dynamique est une invitation à revenir dans le corps, en douceur, pour libérer ce qui a
          besoin de l’être. Elle agit en profondeur, sur les tensions musculaires, mais aussi émotionnelles et
          énergétiques.
        </p>
        <strong>Déroulement d’une séance</strong>
        <ul>
          <li>Séance de 1h15, en petit groupe (max 6 pers.), adaptée à vos besoins.</li>
          <li>Accueil, temps d’échange, reconnexion à soi par la respiration.</li>
          <li>Mouvements doux, étirements, automassages, relaxation guidée au sol.</li>
          <li>Final avec instruments (bol, carillons), retour progressif, échanges.</li>
        </ul>
        <strong>Bienfaits</strong>
        <ul>
          <li>Profonde détente physique et mentale</li>
          <li>Libération des tensions accumulées</li>
          <li>Respiration plus fluide et naturelle</li>
          <li>Ancrage, apaisement émotionnel, reconnexion à soi</li>
        </ul>
        <strong>Pour qui ?</strong>
        <ul>
          <li>Personnes tendues, épuisées, en transition ou en quête de reconnexion</li>
        </ul>
        <div className="chips">
          <span className="chip">1h à 1h30</span>
          <span className="chip">A partir de 16€ / pers (groupe)</span>
          <span className="chip">Saint-Raphaël & environs</span>
        </div>
      </>
    )
  },
  {
    icon: '🌙',
    title: 'Massage au bol',
    description: (
      <>
        <strong>Soin vibratoire profond pour rééquilibrer le corps et apaiser l'esprit</strong>
        <p>
          Le massage au bol est un soin enveloppant et réharmonisant. Un bol thérapeutique est posé et déplacé
          délicatement sur le corps habillé, chaque vibration invite à un relâchement physique, émotionnel et
          énergétique.
        </p>
        <strong>Déroulement d’une séance</strong>
        <ul>
          <li>Accueil, ancrage, massage au bol sur le dos puis le ventre.</li>
          <li>Complément possible avec d’autres instruments selon vos besoins.</li>
          <li>Temps d’échange et verre d’eau en fin de séance.</li>
        </ul>
        <strong>Bienfaits</strong>
        <ul>
          <li>Détente profonde, libération des tensions, rééquilibrage énergétique</li>
          <li>Meilleur sommeil, clarté d’esprit, paix intérieure</li>
        </ul>
        <strong>Contre-indications</strong>
        <ul>
          <li>Femmes enceintes de moins de 4 mois</li>
          <li>Personnes porteuses d’un pacemaker</li>
          <li>Pathologies lourdes (sur avis médical)</li>
        </ul>
        <div className="chips">
          <span className="chip">1h15 à 1h30</span>
          <span className="chip">A partir de 70€</span>
          <span className="chip">Cabinet ou domicile</span>
        </div>
      </>
    )
  },
  {
    icon: '🎶',
    title: 'Voyage sonore',
    description: (
      <>
        <strong>Bain vibratoire méditatif – Une immersion sensorielle guidée par le son</strong>
        <p>
          Le voyage sonore est un moment de lâcher-prise total, une exploration intérieure guidée par le son (bols
          chantants, tambours, carillons, flûte, voix…).
        </p>
        <strong>Déroulement</strong>
        <ul>
          <li>Petit groupe (max 6 pers.), accueil, météo intérieure, installation confortable.</li>
          <li>Voyage sonore guidé, instruments variés, temps de partage en fin de séance.</li>
        </ul>
        <strong>Bienfaits</strong>
        <ul>
          <li>Lâcher-prise, apaisement du mental, détente du système nerveux</li>
          <li>Reconnexion au corps, nettoyage énergétique subtil</li>
        </ul>
        <div className="chips">
          <span className="chip">1h à 1h30</span>
          <span className="chip">A partir de 20€ / pers</span>
          <span className="chip">Individuel ou collectif</span>
        </div>
      </>
    )
  },
  {
    icon: '💖',
    title: 'Harmonie intérieure (accompagnement sur 4 séances)',
    description: (
      <>
        <strong>Un accompagnement profond pour retrouver ton équilibre corps–cœur–esprit</strong>
        <p>
          Fatigue chronique, tensions persistantes, mental envahissant… Cet accompagnement est une parenthèse pour toi,
          un chemin de reconnexion à ton corps, à ton souffle, à ce qui t’anime profondément.
        </p>
        <strong>Ce que je te propose</strong>
        <ul>
          <li>4 séances individuelles sur mesure (1h à 1h30 chacune) sur 12 semaines max</li>
          <li>Soutien bienveillant entre les séances</li>
          <li>Ressources bien-être : vidéo, méditations audio, e-book, canal WhatsApp privé</li>
        </ul>
        <strong>Pour qui ?</strong>
        <ul>
          <li>Femmes en trop-plein, en transition, en quête de sens ou de reconnexion</li>
        </ul>
        <strong>Présentiel ou à distance</strong>
        <ul>
          <li>Présentiel : agit sur le corps, libère les tensions, favorise l’ancrage</li>
          <li>Distanciel : ouvre à des prises de conscience subtiles et puissantes</li>
        </ul>
        <div className="chips">
          <span className="chip">4 séances sur 9 à 12 semaines</span>
          <span className="chip">Présentiel ou à distance</span>
          <span className="chip">Saint-Raphaël ou nature</span>
        </div>
      </>
    )
  }
];

const Accompagnements = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const location = useLocation();
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      const idx = idToIdx[hash];
      if (typeof idx === 'number') {
        setOpenIdx(idx);
        setTimeout(() => {
          refs[idx]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          refs[idx]?.current?.focus?.();
        }, 100);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <div className="accompaniements">
      <div className="accompaniements-container">
        <span className="main-title">Accompagnements</span>
        <div className="accordion-list">
          {accompagnements.map((item, idx) => (
            <div
              className={`accordion-item${openIdx === idx ? ' open' : ''}`}
              key={idx}
              id={idx === 0 ? 'harmonisation' : idx === 2 ? 'voyages' : idx === 3 ? 'accompagnement' : undefined}
              ref={refs[idx]}
              tabIndex={-1}
            >
              <button className="accordion-title" onClick={() => toggle(idx)}>
                <span className="icon">{item.icon}</span>
                <span>{item.title}</span>
                <span className="arrow">{openIdx === idx ? '▲' : '▼'}</span>
              </button>
              <div className="accordion-content" style={{ display: openIdx === idx ? 'block' : 'none' }}>
                {item.description}
                <ContactButton />
              </div>
            </div>
          ))}
        </div>

        <p className="note-nature">
          🌲 Certaines séances peuvent se dérouler en extérieur (forêt, colline, plage…), pour profiter de la puissance
          régénérante du vivant. Le cadre naturel favorise la détente, l’ancrage et la reconnexion profonde.
        </p>
      </div>
    </div>
  );
};

export default Accompagnements;
