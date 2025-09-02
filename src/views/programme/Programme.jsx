import React, { useState, useEffect } from 'react';
import SEO from '@/components/seo/SEO.jsx';
import ReactMarkdown from 'react-markdown';
import { getProgrammes } from '@/utils/getProgrammes';
import './Programme.scss';
const Programme = () => {
  const [currentProgramme, setCurrentProgramme] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadProgramme = async () => {
      try {
        const programmes = await getProgrammes();
        if (programmes.length > 0) setCurrentProgramme(programmes[0]);
      } catch (error) {
        console.error('Error loading programme:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProgramme();
  }, []);
  return (
    <div className="programme">
      <SEO
        title={currentProgramme?.title ? `Programme - ${currentProgramme.title}` : 'Programme'}
        description="Programme des séances : relaxation, voyages sonores, massages vibratoires et ateliers bien-être à Fréjus / Saint-Raphaël. Inscription nécessaire."
        jsonLd={currentProgramme ? {
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: currentProgramme.title,
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          eventStatus: 'https://schema.org/EventScheduled'
        } : null}
      />
      <div className="programme-content">
        <div className="programme-text">
          <div className="activities">
            {loading ? <p>Chargement du programme...</p> : currentProgramme ? <>
              {currentProgramme.title ? <h2>{currentProgramme.title}</h2> : null}
              <ReactMarkdown>{currentProgramme.content}</ReactMarkdown>
              {currentProgramme.image && <div className="programme-image"><img src={currentProgramme.image} alt={currentProgramme.title} /></div>}
            </> : <p>Aucun programme disponible pour le moment.</p>}
          </div>
          <p className="note">✨ Toutes les activités se font sur inscription, les places sont limitées pour préserver l'intimité et la qualité de chaque rencontre.</p>
        </div>
      </div>
    </div>
  );
};
export default Programme;
