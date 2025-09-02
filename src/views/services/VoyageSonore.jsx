import React from 'react';
import SEO from '@/components/seo/SEO.jsx';

const VoyageSonore = () => {
  return (
    <div className="service-page">
      <SEO
        title="Voyage sonore méditatif Fréjus"
        description="Voyage sonore méditatif à Fréjus : bain vibratoire aux bols, tambours et instruments pour lâcher prise et apaiser le mental."
        jsonLd={{
          '@context':'https://schema.org',
          '@type':'Service',
          name:'Voyage sonore méditatif',
          areaServed:['Fréjus','Saint-Raphaël'],
          description:'Voyage sonore bain vibratoire pour détente profonde et lâcher-prise.'
        }}
      />
      <h1>Voyage sonore méditatif à Fréjus</h1>
      <p>Un espace immersif pour se laisser porter par les vibrations : bols chantants, carillons, tambour, voix. Le voyage sonore invite le mental à ralentir et le corps à entrer en résonance avec des fréquences apaisantes.</p>
      <h2>Bienfaits</h2>
      <ul>
        <li>Lâcher-prise</li>
        <li>Soutien du sommeil</li>
        <li>Apaisement du système nerveux</li>
        <li>Reconnexion intérieure</li>
      </ul>
      <h2>Déroulement</h2>
      <p>Installation confortable, ancrage respiratoire, immersion sonore progressive, phase d'intégration et retour.</p>
      <p><strong>Réservation :</strong> via le programme ou contact direct.</p>
    </div>
  );
};
export default VoyageSonore;
