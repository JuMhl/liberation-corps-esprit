import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Generic SEO component.
 * Props:
 * - title: string (will be suffixed with brand)
 * - description: string
 * - image: absolute or root-relative URL
 * - type: 'website' | 'article'
 * - jsonLd: object or array of objects for structured data
 * - canonical: override canonical URL
 */
const BRAND = 'Libération du Corps et de l’Esprit';
const BASE_URL = import.meta.env.VITE_SITE_URL || 'https://liberationducorpsetdelesprit.fr';

function ensureAbsolute(url) {
  if (!url) return undefined;
  if (url.startsWith('http')) return url;
  if (url.startsWith('/')) return BASE_URL.replace(/\/$/, '') + url;
  return `${BASE_URL.replace(/\/$/, '')}/${url}`;
}

const SEO = ({ title, description, image, type = 'website', jsonLd, canonical }) => {
  const location = useLocation();
  const path = location.pathname + (location.search || '');
  const fullUrl = ensureAbsolute(canonical || path);
  const pageTitle = title ? `${title} | ${BRAND}` : BRAND;
  const ogImage = ensureAbsolute(image) || ensureAbsolute('/logo-2025.png');

  useEffect(() => {
    document.title = pageTitle;

    const setMeta = (name, attr, value) => {
      if (!value) return;
      let el = document.head.querySelector(`${attr}[name='${name}']`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    const setProperty = (property, content) => {
      if (!content) return;
      let el = document.head.querySelector(`meta[property='${property}']`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', 'name', description);
    setProperty('og:title', pageTitle);
    setProperty('og:description', description);
    setProperty('og:type', type);
    setProperty('og:url', fullUrl);
    setProperty('og:image', ogImage);
    setProperty('twitter:card', 'summary_large_image');
    setProperty('twitter:title', pageTitle);
    setProperty('twitter:description', description);
    setProperty('twitter:image', ogImage);

    // Canonical link
    let link = document.head.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', fullUrl);

    // JSON-LD cleanup (remove previous inserted by this component)
    document.querySelectorAll('script[data-seo-jsonld]').forEach((s) => s.remove());

    const inject = (obj) => {
      if (!obj) return;
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoJsonld = 'true';
      script.text = JSON.stringify(obj);
      document.head.appendChild(script);
    };

    if (Array.isArray(jsonLd)) jsonLd.forEach(inject); else if (jsonLd) inject(jsonLd);
  }, [pageTitle, description, type, fullUrl, ogImage, jsonLd]);

  return null; // head side-effects only
};

export default SEO;
