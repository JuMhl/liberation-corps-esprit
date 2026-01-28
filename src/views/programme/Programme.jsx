import React, { useState, useEffect, useMemo } from 'react';
import SEO from '@/components/seo/SEO.jsx';
import Button from '@/components/button/Button.jsx';
import ReactMarkdown from 'react-markdown';
import { getProgrammes } from '@/utils/getProgrammes';
import './Programme.scss';
import Loader from '@/components/loader/Loader.jsx';

// Helpers for JSON-LD and display
const BASE_URL = import.meta.env.VITE_SITE_URL || 'https://liberationducorpsetdelesprit.fr';
const absUrl = (url) => {
  if (!url) return undefined;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith('/')) return `${BASE_URL.replace(/\/$/, '')}${url}`;
  return `${BASE_URL.replace(/\/$/, '')}/${url}`;
};
const toIso = (v) => {
  if (!v) return undefined;
  try {
    return typeof v === 'string' && /T\d{2}:\d{2}/.test(v) ? v : new Date(v).toISOString();
  } catch {
    return undefined;
  }
};
const monthYear = (v) => {
  try {
    const d = new Date(v);
    return d.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  } catch {
    return undefined;
  }
};

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

  // Use WebPage (or CollectionPage) JSON-LD so this page is NOT treated as an Event
  const pageJsonLd = useMemo(() => {
    const name = currentProgramme?.title
      ? `Programme - ${currentProgramme.title}`
      : currentProgramme?.date
      ? `Programme - ${monthYear(currentProgramme.date)}`
      : 'Programme';
    const url = absUrl('/programme');
    const image = currentProgramme?.image ? absUrl(currentProgramme.image) : undefined;
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name,
      description:
        'Programme des séances : relaxation, voyages sonores, massages vibratoires et ateliers bien-être à Fréjus / Saint-Raphaël. Inscription nécessaire.',
      url,
      isPartOf: { '@type': 'WebSite', name: 'Libération du Corps et de l’Esprit', url: BASE_URL },
      primaryImageOfPage: image ? { '@type': 'ImageObject', url: image } : undefined,
      datePublished: currentProgramme?.date ? toIso(currentProgramme.date) : undefined
    };
  }, [currentProgramme]);
  return (
    <div className="programme">
      <SEO
        title={
          currentProgramme?.title
            ? `Programme - ${currentProgramme.title}`
            : currentProgramme?.date
            ? `Programme - ${monthYear(currentProgramme.date)}`
            : 'Programme'
        }
        description="Programme des séances : relaxation, voyages sonores, massages vibratoires et ateliers bien-être à Fréjus / Saint-Raphaël. Inscription nécessaire."
        jsonLd={pageJsonLd}
      />
      <div className="programme-content">
        <div className="programme-text">
          <div className="activities">
            {loading ? (
              <Loader text="Chargement du programme..." />
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
            <div className="btn-container">
              <Button to="/contact" variant="primary">
                Contactez nous
              </Button>
            </div>
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
