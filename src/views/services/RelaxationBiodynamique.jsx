import React from 'react';
import SEO from '@/components/seo/SEO.jsx';

const RelaxationBiodynamique = () => {
  const faq = [
    { q: 'Combien de temps dure une séance de relaxation bio-dynamique ?', a: 'Environ 1h15 comprenant accueil, pratique guidée et intégration.' },
    { q: 'Faut-il une tenue spécifique ?', a: 'Des vêtements souples et confortables suffisent.' },
    { q: 'Puis-je venir si je suis très tendue ou stressée ?', a: 'Oui, c\'est justement une indication principale.' }
  ];
  const faqJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(f => ({ '@type':'Question', name:f.q, acceptedAnswer:{ '@type':'Answer', text:f.a } }))
  };
  return (
    <div className="service-page">
      <SEO
        title="Relaxation bio-dynamique Fréjus / Saint-Raphaël"
        description="Séance de relaxation bio-dynamique à Fréjus / Saint-Raphaël : libérer les tensions, apaiser le mental et retrouver l'ancrage."
        jsonLd={[
          {
            '@context':'https://schema.org',
            '@type':'Service',
            name:'Relaxation bio-dynamique',
            areaServed:['Fréjus','Saint-Raphaël'],
            description:'Séances de relaxation bio-dynamique pour détente profonde et gestion du stress.'
          }, faqJson
        ]}
      />
      <h1>Relaxation bio-dynamique à Fréjus / Saint-Raphaël</h1>
      <p>La relaxation bio-dynamique est une approche corporelle douce qui associe respiration, mouvements lents, conscience sensorielle et phases d\'intégration. Elle permet de relâcher les tensions physiques accumulées et de calmer le système nerveux.</p>
      <h2>Bienfaits</h2>
      <ul>
        <li>Diminution du stress et de la fatigue</li>
        <li>Respiration plus ample</li>
        <li>Ancrage et recentrage émotionnel</li>
        <li>Sensation d\'espace intérieur</li>
      </ul>
      <h2>Déroulement d\'une séance</h2>
      <p>Accueil, temps d\'écoute, mise en mouvement douce, écoute guidée du corps, relaxation finale aux instruments, intégration et échange.</p>
      <h2>FAQ</h2>
      <dl>
        {faq.map((f,i)=>(<div key={i}><dt>{f.q}</dt><dd>{f.a}</dd></div>))}
      </dl>
      <p><strong>Réservation :</strong> rendez-vous via la page contact ou message direct.</p>
    </div>
  );
};
export default RelaxationBiodynamique;
