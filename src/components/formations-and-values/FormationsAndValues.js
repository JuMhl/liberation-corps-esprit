import React from 'react';
import './FormationsAndValues.scss';

const FormationsAndValues = () => (
  <section className="formations-values">
    <div className="formations-values__block">
      <h2 className="formations-values__title">🎓 Ma formation</h2>
      <p>
        Mon parcours de vie m'a naturellement conduite vers l'accompagnement des femmes en quête de sens, d'apaisement
        et de reconnexion à elles-mêmes. Je me suis formée à plusieurs approches complémentaires, tout d'abord pour mon
        bien-être, mais que j'intègre avec douceur et discernement à mes accompagnements :
      </p>
      <ul className="formations-values__list">
        <li>Relaxation bio-dynamique</li>
        <li>Sonothérapie (bols chantants, bols cristal, tambours, carillons, flûte, diapasons…)</li>
        <li>PNL - Programmation Neuro-Linguistique</li>
        <li>Hypnose et hypnose spirituelle</li>
        <li>TCC - Thérapie Cognitivo-Comportementale</li>
        <li>Lithothérapie (utilisation des pierres de soin)</li>
        <li>Conseillère en phytothérapie, aromathérapie, nutrithérapie, apithérapie</li>
        <li>Techniques de respiration, de visualisation et d'ancrage</li>
      </ul>
      <p>
        Je continue de me former régulièrement, guidée par la curiosité, l'humilité et l'envie de proposer un
        accompagnement juste, vivant et évolutif.
      </p>
    </div>
    <div className="formations-values__block">
      <h2 className="formations-values__title">💆‍♀️ Mon approche</h2>
      <p>
        Chaque femme est unique, et chaque chemin de retour à soi l'est aussi. Je ne propose pas de solution toute
        faite, mais un espace d'accueil, de présence et de transformation.
      </p>
      <p>
        Mon approche est sensorielle, intuitive et enracinée dans le corps. Elle mêle des outils concrets (relaxation,
        son, respiration, thérapies naturelles…) à un cadre sécurisant et bienveillant pour que chacune puisse :
      </p>
      <ul className="formations-values__list">
        <li>relâcher ce qui pèse</li>
        <li>se recentrer</li>
        <li>se reconnecter à sa vitalité profonde</li>
      </ul>
    </div>
    <div className="formations-values__block">
      <h2 className="formations-values__title">💖 Mes valeurs</h2>
      <ul className="formations-values__list">
        <li>
          <strong>Écoute et présence vraie</strong> : je suis là, sans jugement, dans une posture d'accueil
          inconditionnel.
        </li>
        <li>
          <strong>Douceur et respect du rythme</strong> : parce que la transformation a besoin d'un terrain sûr, lent et
          stable.
        </li>
        <li>
          <strong>Authenticité</strong> : je partage ce que j'incarne. Mon parcours personnel nourrit ma posture
          d'accompagnante.
        </li>
        <li>
          <strong>Autonomie</strong> : je transmets des outils que mes clientes peuvent réutiliser chez elles, à leur
          rythme.
        </li>
        <li>
          <strong>Lien sacré entre corps, cœur et esprit</strong> : je crois profondément que c'est en les réunifiant
          qu'on retrouve son axe.
        </li>
      </ul>
    </div>
  </section>
);

export default FormationsAndValues;
