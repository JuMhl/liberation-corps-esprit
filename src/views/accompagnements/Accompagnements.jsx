import React, { useState, useEffect, useRef } from 'react';
import SEO from '@/components/seo/SEO.jsx';
import { useLocation } from 'react-router-dom';
import Button from '@/components/button/Button.jsx';
import './Accompagnements.scss';
const idToIdx = { harmonisation: 0, voyages: 2, accompagnement: 3 };
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
          besoin de l'être. Elle agit en profondeur, sur les tensions musculaires, mais aussi émotionnelles et
          énergétiques.
        </p>
        <strong className="section-title">Déroulement d'une séance</strong>
        <ul className="section-subtitle">
          <li>Séance de 1h15, en petit groupe (max 6 pers.), adaptée à vos besoins.</li>
          <li>Accueil, temps d’échange, reconnexion à soi par la respiration.</li>
          <li>Mouvements doux, étirements, automassages, relaxation guidée au sol.</li>
          <li>Final avec instruments (bol, carillons), retour progressif, échanges.</li>
        </ul>
        <strong className="section-title">Bienfaits</strong>
        <ul className="section-subtitle">
          <li>Profonde détente physique et mentale</li>
          <li>Libération des tensions accumulées</li>
          <li>Respiration plus fluide et naturelle</li>
          <li>Ancrage, apaisement émotionnel, reconnexion à soi</li>
        </ul>
        <strong className="section-title">Pour qui ?</strong>
        <ul className="section-subtitle">
          <li>Personnes tendues, épuisées, en transition ou en quête de reconnexion</li>
        </ul>
        <div className="chips">
          <span className="chip">1h à 1h30</span>
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
        <strong className="section-title">Déroulement d'une séance</strong>
        <ul className="section-subtitle">
          <li>Accueil, ancrage, massage au bol sur le ventre puis le dos.</li>
          <li>Complément possible avec d’autres instruments selon vos besoins.</li>
          <li>Temps d’échange et verre d’eau (ou autre) en fin de séance.</li>
        </ul>
        <strong className="section-title">Bienfaits</strong>
        <ul className="section-subtitle">
          <li>Détente profonde, libération des tensions, rééquilibrage énergétique</li>
          <li>Meilleur sommeil, clarté d'esprit, paix intérieure</li>
        </ul>
        <strong className="section-title">Contre-indications</strong>
        <ul className="section-subtitle">
          <li>Femmes enceintes de moins de 4 mois</li>
          <li>Personnes porteuses d’un pacemaker</li>
          <li>Pathologies lourdes (sur avis médical)</li>
        </ul>
        <div className="chips">
          <span className="chip">1h15 à 1h30</span>
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
        <strong className="section-title">Déroulement</strong>
        <ul className="section-subtitle">
          <li>Petit groupe (max 6 pers.), accueil, météo intérieure, installation confortable.</li>
          <li>Voyage sonore guidé, instruments variés, temps de partage en fin de séance.</li>
        </ul>
        <strong className="section-title">Bienfaits</strong>
        <ul className="section-subtitle">
          <li>Lâcher-prise, apaisement du mental, détente du système nerveux</li>
          <li>Reconnexion au corps, nettoyage énergétique subtil</li>
        </ul>
        <div className="chips">
          <span className="chip">1h à 1h30</span>
          <span className="chip">Individuel ou collectif</span>
        </div>
      </>
    )
  },
  {
    icon: '🙏',
    title: 'Accompagnements Holistiques',
    description: (
      <>
        <strong>
          Reconnection aux énergies de la nature, exploration au travers des plantes, des pierres, de la géobiologie, de
          la géométrie sacrée et du magnétisme, un chemin vers la lumière.
        </strong>
        <p>
          Un apprentissage et une ouverture vers nos anciennes connaissances afin de redécouvrir son énergie intérieure
          et son ressenti.
        </p>
        <strong className="section-title">Conférences et soirées thématiques</strong>
        <p className="section-subtitle">
          Par des conférences sur des thèmes divers ou soirées thématiques de dialogue et d'échange.
        </p>
        <strong className="section-title">Stages</strong>
        <p className="section-subtitle">
          Nous vous proposerons divers stages de 1 à 3 jours sur des thèmes reliés à la nature ou aux énergies pour vous
          permettre une reconnexion profonde et une transmission de connaissance.
        </p>
        <strong className="section-title">Ateliers</strong>
        <p className="section-subtitle">
          Pratique holistique en phytothérapie, lithothérapie, géométrie sacrée et divers autres thèmes afin de se
          reconnecter à soi-même et aux autres.
        </p>
        <strong className="section-title">Soins individuels</strong>
        <p className="section-subtitle">
          Je vous propose de reprendre le contrôle de votre vie et de vos ressentis en vous libérant de vos blocages.
          Mes formations en énergétique, pnl, hypnose, hypnose régressive, me permettent de vous accompagner de façon
          personnalisée afin de vous aider à vous défaire de vos croyances limitantes de vos liens toxiques et autres.
        </p>
        <strong className="section-title">Vos lieux de vie</strong>
        <p className="section-subtitle">
          Je propose également des nettoyages de vos maisons (géobiologie, énergétique, entités)
        </p>
        <strong className="section-title">En conclusion</strong>
        <p className="section-subtitle">
          Nous pouvons après des années d'expérimentation et d'apprentissage, vous partager nos connaissances, échanger,
          et vous accompagner en groupe ou individuellement. L'échange et la connaissance vous donne le savoir, une
          ouverture vers une autre dimension à la redécouverte de vous-même et des autres.
        </p>
      </>
    )
  }
];
export default function Accompagnements() {
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
  }, [location.hash]);
  const toggle = (idx) => setOpenIdx(openIdx === idx ? null : idx);
  return (
    <div className="accompaniements">
      <SEO
        title="Accompagnements sonothérapie & relaxation"
        description="Relaxation bio-dynamique, voyage sonore, massage au bol tibétain et accompagnement mieux-être à Fréjus / Saint-Raphaël. Réduire stress et tensions."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Accompagnements bien-être sonothérapie',
          areaServed: ['Fréjus', 'Saint-Raphaël', 'Var'],
          description:
            'Relaxation bio-dynamique, voyage sonore méditatif, massage au bol tibétain, accompagnement gestion du stress.'
        }}
      />
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
                <Button to="/contact" variant="primary">
                  Contactez nous
                </Button>
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
}
