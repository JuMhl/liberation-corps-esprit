import React from 'react';
import './KateriCreations.scss';
import Caroussel from '@/components/caroussel/Caroussel.jsx';
import aesteticDreamcatcher from '@/assets/katericreations/aesteticDreamcatcher.png';
import bigDreamcatcher from '@/assets/katericreations/bigDreamcatcher.png';
import dreamcatcher from '@/assets/katericreations/dreamcatcher.png';
const images = [bigDreamcatcher, dreamcatcher, aesteticDreamcatcher];
const creations = [
  'Attrapes-rêves tissés avec intention, pour protéger le sommeil et filtrer les énergies.',
  'Sacs médecine contenant des éléments symboliques : pierres, plantes, messages intuitifs.',
  'Pierres peintes à la main, à poser chez soi ou à emporter avec soi.',
  'Créations sur mesure, à la demande, selon ton énergie du moment ou une intention particulière.'
];
const KateriCreations = () => (
  <div className="kateri-creations">
    <div className="kateri-creations-container">
      <span className="main-title">Kateri Creations</span>
      <div className="kateri-creations-content">
        <h3>✨ Créations intuitives inspirées des sagesses ancestrales</h3>
        <p>
          Il y a des élans qui viennent du cœur. Des gestes nés du silence, du souffle, d'un appel intérieur.
          <br /><br />Lors d'un voyage au Québec, j'ai ressenti une connexion profonde avec les peuples autochtones de ces terres.
          Une mémoire ancienne, un lien d'âme. Depuis ce moment, mes mains ont commencé à créer. Tisser, assembler,
          peindre… comme guidée par quelque chose de plus grand que moi.
          <br /><br />C'est ainsi qu'est née Kateri Créations : une ligne d'objets vibratoires, uniques et faits main, pour
          accompagner les âmes sensibles, les lieux de vie et les rituels du quotidien.
        </p>
      </div>
      <h3>🌿 Ce que je crée</h3>
      <ul className="creations-list-styled">
        {creations.map((item, idx) => <li key={idx}><span className="creation-bullet">•</span> {item}</li>)}
      </ul>
      <div className="kateri-creations-products-mobile"><Caroussel images={images} title="" /></div>
      <div className="kateri-creations-products-desktop">
        <img src={bigDreamcatcher} alt="Grand attrape-rêve" className="kateri-img" />
        <img src={dreamcatcher} alt="Attrape-rêve classique" className="kateri-img" />
        <img src={aesteticDreamcatcher} alt="Attrape-rêve organique" className="kateri-img" />
      </div>
      <h3>🌙 Une prolongation naturelle de mon accompagnement</h3>
      <p>
        Ces objets ne sont pas de simples décorations. Ils portent une mémoire vibratoire, une énergie douce et
        bienveillante. Ils peuvent t'accompagner dans un processus de guérison, marquer un passage important dans ta
        vie, ou simplement créer un espace sacré chez toi.
        <br /><br />Chaque création est reliée à mon travail thérapeutique et énergétique. Elle prolonge mon approche de
        reconnexion au corps, au souffle, à l'instant.
      </p>
      <div className="signature">
        <h4>🪶 Signature</h4>
        <p>
          Kateri Créations<br />Reliée aux éléments, guidée par l'intuition<br />Chaque création est un écho du vivant : un lien tissé entre la nature, le cœur et l'énergie subtile.
        </p>
      </div>
    </div>
  </div>
);
export default KateriCreations;
