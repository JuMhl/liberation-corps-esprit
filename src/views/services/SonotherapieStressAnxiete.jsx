import React from 'react';
import SEO from '@/components/seo/SEO.jsx';

const SonotherapieStressAnxiete = () => (
  <div className="service-page">
    <SEO
      title="Sonothérapie stress et anxiété"
      description="Sonothérapie pour réduire le stress et l'anxiété : vibrations, respiration et détente profonde pour apaiser le système nerveux."
      jsonLd={{
        '@context':'https://schema.org',
        '@type':'Service',
        name:'Sonothérapie stress et anxiété',
        areaServed:['Fréjus','Saint-Raphaël'],
        description:'Séances personnalisées de sonothérapie pour apaiser stress et anxiété.'
      }}
    />
    <h1>Sonothérapie pour réduire le stress et l'anxiété</h1>
    <p>La sonothérapie utilise fréquences, vibrations et espaces de silence pour permettre au système nerveux de sortir de l'hypervigilance. Elle soutient les personnes confrontées à la surcharge mentale, la fatigue émotionnelle ou l'agitation intérieure.</p>
    <h2>Objectifs</h2>
    <ul>
      <li>Diminution des tensions corporelles</li>
      <li>Ralentissement du flux mental</li>
      <li>Amélioration du sommeil</li>
      <li>Renforcement de la perception corporelle</li>
    </ul>
    <h2>Déroulement</h2>
    <p>Bilan bref, installation, séquence sonore adaptée (bols, tambour doux, carillons), intégration et conseil final.</p>
    <p><strong>Réservation :</strong> séance individuelle sur demande.</p>
  </div>
);
export default SonotherapieStressAnxiete;
