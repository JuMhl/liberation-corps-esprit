import React, { useState, useMemo } from 'react';
import './ShareButtons.scss';
import whatsappIcon from '@/assets/logos/whatsapp.svg';
import emailIcon from '@/assets/logos/email.svg';

/**
 * ShareButtons component (amélioré)
 * Props:
 *  - title: string (titre article)
 *  - url?: string (URL absolue sinon window.location.href)
 *  - text?: string (extrait / fallback)
 *  - image?: string
 *  - networks?: string[] (ordre + sélection) valeurs possibles: 'facebook','linkedin','x','whatsapp','email','copy'
 *  - onShare?: (payload) => void (callback tracking supplémentaire)
 *  - disableNative?: boolean (cacher le bouton natif)
 */
const ICONS = {
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 48 48">
      <path fill="#3f51b5" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
      <path
        fill="#fff"
        d="M29.368,24H26v12h-5V24h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H30v4h-2.287 C26.104,16,26,16.6,26,17.723V20h4L29.368,24z"
      ></path>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#0A66C2"
        d="M19 3A2.94 2.94 0 0 1 22 6v12a2.94 2.94 0 0 1-3 3H5a2.94 2.94 0 0 1-3-3V6a2.94 2.94 0 0 1 3-3Zm-9.71 14.5v-7H7.09v7ZM8 9.08A1.25 1.25 0 1 0 6.77 7.8 1.24 1.24 0 0 0 8 9.08ZM18 17.5v-3.93c0-2.06-1.1-3.02-2.57-3a2.22 2.22 0 0 0-2 1.09h-.03V10.5H11.1v7h2.34v-3.66a1.42 1.42 0 0 1 1.31-1.59c.76 0 1.25.42 1.25 1.58V17.5Z"
      />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#000000"
        d="M18.25 2h3.4l-7.42 8.48L23 22h-6.69l-5.23-6.86L5 22H1.59l7.93-9.05L2 2h6.78l4.72 6.24ZM17.06 20h1.89L7.05 4h-2Z"
      />
    </svg>
  ),
  whatsapp: <img src={whatsappIcon} alt="WhatsApp" loading="lazy" />,
  email: <img src={emailIcon} alt="Email" loading="lazy" />,
  copy: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 2h11a3 3 0 0 1 3 3v11h-2V5a1 1 0 0 0-1-1H8Zm8 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1Z"
      />
    </svg>
  ),
  native: (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 48 48">
      <path d="M 36 5 C 32.151772 5 29 8.1517752 29 12 C 29 12.585766 29.198543 13.109464 29.335938 13.654297 L 17.345703 19.652344 C 16.059118 18.073938 14.181503 17 12 17 C 8.1517722 17 5 20.151775 5 24 C 5 27.848225 8.1517722 31 12 31 C 14.181503 31 16.059118 29.926062 17.345703 28.347656 L 29.335938 34.345703 C 29.198543 34.890536 29 35.414234 29 36 C 29 39.848225 32.151772 43 36 43 C 39.848228 43 43 39.848225 43 36 C 43 32.151775 39.848228 29 36 29 C 33.818497 29 31.940882 30.073938 30.654297 31.652344 L 18.664062 25.654297 C 18.801457 25.109464 19 24.585766 19 24 C 19 23.414234 18.801457 22.890536 18.664062 22.345703 L 30.654297 16.347656 C 31.940882 17.926062 33.818497 19 36 19 C 39.848228 19 43 15.848225 43 12 C 43 8.1517752 39.848228 5 36 5 z M 36 8 C 38.226909 8 40 9.7730927 40 12 C 40 14.226907 38.226909 16 36 16 C 33.773091 16 32 14.226907 32 12 C 32 9.7730927 33.773091 8 36 8 z M 12 20 C 14.226909 20 16 21.773093 16 24 C 16 26.226907 14.226909 28 12 28 C 9.7730915 28 8 26.226907 8 24 C 8 21.773093 9.7730915 20 12 20 z M 36 32 C 38.226909 32 40 33.773093 40 36 C 40 38.226907 38.226909 40 36 40 C 33.773091 40 32 38.226907 32 36 C 32 33.773093 33.773091 32 36 32 z"></path>
    </svg>
  )
};

function sanitizeExcerpt(raw) {
  if (!raw) return '';
  return raw
    .replace(/```[\s\S]*?```/g, ' ') // code blocks
    .replace(/`[^`]*`/g, ' ')
    .replace(/[#>*_~\-\[\]()!]/g, ' ') // markdown symbols
    .replace(/https?:\/\/\S+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildShareText(title, text) {
  const cleaned = sanitizeExcerpt(text || title);
  if (cleaned.length <= 240) return cleaned;
  // coupe proprement sur un mot
  const slice = cleaned.slice(0, 240);
  return slice.slice(0, slice.lastIndexOf(' ')) + '…';
}

// Ordre par défaut ("copier" en dernier)
const DEFAULT_NETWORKS = ['facebook', 'linkedin', 'x', 'whatsapp', 'email', 'copy'];

const ShareButtons = ({
  title = '',
  url = '',
  text = '',
  image, // non utilisé directement mais conservé pour future extension (pinterest, etc.)
  networks = DEFAULT_NETWORKS,
  onShare,
  disableNative = false
}) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const baseExcerpt = useMemo(() => buildShareText(title, text || title), [title, text]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(baseExcerpt);
  const tweet = encodeURIComponent(`${baseExcerpt}`.slice(0, 240));

  const track = (network) => {
    const payload = { event: 'share_click', network, url: shareUrl, title };
    try {
      // dataLayer (Google Tag Manager) si présent
      if (window && Array.isArray(window.dataLayer)) {
        window.dataLayer.push(payload);
      }
      if (onShare) onShare(payload);
    } catch (_) {
      /* no-op */
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      track('copy');
    } catch (e) {
      console.error('Clipboard copy failed', e);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: baseExcerpt, url: shareUrl });
        track('native');
      } catch (e) {
        /* user cancelled */
      }
    }
  };

  const renderButton = (network) => {
    switch (network) {
      case 'facebook':
        return (
          <a
            key={network}
            className="share-btn fb"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Partager sur Facebook"
            title="Facebook"
            data-share-network="facebook"
            onClick={() => track('facebook')}
          >
            <span className="icon-wrapper">{ICONS.facebook}</span>
          </a>
        );
      case 'linkedin':
        return (
          <a
            key={network}
            className="share-btn ln"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Partager sur LinkedIn"
            title="LinkedIn"
            data-share-network="linkedin"
            onClick={() => track('linkedin')}
          >
            <span className="icon-wrapper">{ICONS.linkedin}</span>
          </a>
        );
      case 'x':
        return (
          <a
            key={network}
            className="share-btn tw"
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${tweet}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Partager sur X (Twitter)"
            title="X / Twitter"
            data-share-network="x"
            onClick={() => track('x')}
          >
            <span className="icon-wrapper">{ICONS.x}</span>
          </a>
        );
      case 'whatsapp':
        return (
          <a
            key={network}
            className="share-btn wa"
            href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Partager sur WhatsApp"
            title="WhatsApp"
            data-share-network="whatsapp"
            onClick={() => track('whatsapp')}
          >
            <span className="icon-wrapper">{ICONS.whatsapp}</span>
          </a>
        );
      case 'email':
        return (
          <a
            key={network}
            className="share-btn mail"
            href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodedText}%0A%0A${encodedUrl}`}
            aria-label="Partager par email"
            title="Email"
            data-share-network="email"
            onClick={() => track('email')}
          >
            <span className="icon-wrapper">{ICONS.email}</span>
          </a>
        );
      case 'copy':
        return (
          <button
            key={network}
            className="share-btn copy"
            onClick={handleCopy}
            aria-label="Copier le lien"
            title="Copier le lien"
            data-share-network="copy"
          >
            <span className="icon-wrapper">{ICONS.copy}</span>
            {copied && (
              <span className="copy-badge" aria-hidden="true">
                ✔
              </span>
            )}
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="share-block" aria-label="Partager cet article">
      {!disableNative && typeof navigator !== 'undefined' && navigator.share && (
        <button
          className="share-btn native"
          onClick={handleNativeShare}
          aria-label="Partager via les applications du téléphone"
          title="Partager…"
          data-share-network="native"
        >
          <span className="icon-wrapper">{ICONS.native}</span>
          <span className="native-label">Partager…</span>
        </button>
      )}
      <div className="share-buttons-row">{networks.map(renderButton)}</div>
      <div className="sr-only" aria-live="polite">
        {copied ? 'Lien copié dans le presse-papiers' : ''}
      </div>
    </div>
  );
};

export default ShareButtons;
