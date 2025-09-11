import React, { useState, useEffect, useMemo } from 'react';
import SEO from '@/components/seo/SEO.jsx';
import Button from '@/components/button/Button.jsx';
import ReactMarkdown from 'react-markdown';
import { getProgrammes } from '@/utils/getProgrammes';
import './Programme.scss';
import Loader from '@/components/loader/Loader.jsx';

// Helpers to build valid JSON-LD Event
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

  const eventJsonLd = useMemo(() => {
    const e = currentProgramme;
    if (!e) return null;

    // Required fields
    const startDate = toIso(e.date || e.startDate);
    const name = e.title || (e.date ? `Programme ${monthYear(e.date)}` : undefined);

    // Build location
    let location;
    let attendanceMode = 'https://schema.org/OfflineEventAttendanceMode';
    if (e.online) {
      attendanceMode = 'https://schema.org/OnlineEventAttendanceMode';
      if (e.virtual_url) {
        location = { '@type': 'VirtualLocation', url: absUrl(e.virtual_url) };
      }
    } else if (e.location && (e.location.name || e.location.addressLocality || e.location.streetAddress)) {
      location = {
        '@type': 'Place',
        name: e.location.name || [e.location.addressLocality, e.location.addressRegion].filter(Boolean).join(', '),
        address: {
          '@type': 'PostalAddress',
          streetAddress: e.location.streetAddress || undefined,
          addressLocality: e.location.addressLocality || undefined,
          postalCode: e.location.postalCode || undefined,
          addressRegion: e.location.addressRegion || undefined,
          addressCountry: e.location.addressCountry || 'FR'
        }
      };
    }

    // Only inject when we have the minimum required fields
    if (!name || !startDate || !location) return null;

    const offers =
      e.price != null
        ? {
            '@type': 'Offer',
            url: absUrl(e.bookingUrl) || absUrl('/programme'),
            price: String(e.price),
            priceCurrency: e.currency || 'EUR',
            availability: e.availability || 'https://schema.org/InStock'
          }
        : undefined;

    const performer =
      Array.isArray(e.performer) && e.performer.length
        ? e.performer.map((p) => ({ '@type': 'Person', name: typeof p === 'string' ? p : p?.name }))
        : undefined;

    const organizer = {
      '@type': 'Organization',
      name: e.organizer_name || 'Libération du Corps et de l’Esprit',
      url: absUrl(e.organizer_url) || BASE_URL
    };

    return {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name,
      description: e.excerpt || undefined,
      startDate,
      endDate: toIso(e.endDate),
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: attendanceMode,
      image: e.image ? [absUrl(e.image)] : undefined,
      location,
      organizer,
      performer,
      offers
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
        jsonLd={eventJsonLd}
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
                Contactez-moi
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
