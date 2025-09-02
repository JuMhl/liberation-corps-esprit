import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getProgrammes } from '../../utils/getProgrammes';
import './Programme.scss';

const Programme = () => {
  const [currentProgramme, setCurrentProgramme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProgramme = async () => {
      try {
        const programmes = await getProgrammes();
        if (programmes.length > 0) {
          // Prendre le programme le plus récent
          setCurrentProgramme(programmes[0]);
        }
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
      <div className="programme-content">
        <div className="programme-text">
          <div className="activities">
            {loading ? (
              <p>Chargement du programme...</p>
            ) : currentProgramme ? (
              <>
                {currentProgramme.title ? <h2>{currentProgramme.title}</h2> : null}
                <ReactMarkdown>{currentProgramme.content}</ReactMarkdown>
                {currentProgramme.image && (
                  <div className="programme-image">
                    <img src={currentProgramme.image} alt={currentProgramme.title} />
                  </div>
                )}
              </>
            ) : (
              <p>Aucun programme disponible pour le moment.</p>
            )}
          </div>

          <p className="note">
            ✨ Toutes les activités se font sur inscription, les places sont limitées pour préserver l'intimité et la
            qualité de chaque rencontre.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programme;
