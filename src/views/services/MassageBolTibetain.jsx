import React from 'react';
import SEO from '@/components/seo/SEO.jsx';

const MassageBolTibetain = () => (
  <div className="service-page">
    <SEO
      title="Massage au bol tibétain thérapeutique Var"
      description="Massage au bol tibétain thérapeutique dans le Var : soin vibratoire pour réduire stress, tensions et réharmoniser les énergies."
      jsonLd={{
        '@context':'https://schema.org',
        '@type':'Service',
        name:'Massage au bol tibétain thérapeutique',
        areaServed:['Var','Fréjus','Saint-Raphaël'],
        description:'Soin vibratoire aux bols thérapeutiques pour détente et harmonisation énergétique.'
      }}
    />
    <h1>Massage au bol tibétain thérapeutique</h1>
    <p>Ce soin vibratoire utilise des bols thérapeutiques posés et délicatement activés sur le corps habillé. Les ondes produites se propagent dans les tissus, favorisant détente profonde, relâchement musculaire et rééquilibrage énergétique.</p>
    <h2>Bienfaits</h2>
    <ul>
      <li>Apaisement du stress et de l'anxiété</li>
      <li>Sommeil amélioré</li>
      <li>Décontraction musculaire</li>
      <li>Rééquilibrage subtil</li>
    </ul>
    <h2>Déroulement</h2>
    <p>Accueil, ancrage, positionnement des bols, séquence vibratoire dos puis face avant, intégration et échange.</p>
    <p><strong>Réservation :</strong> prendre contact pour un rendez-vous individuel.</p>
  </div>
);
export default MassageBolTibetain;
