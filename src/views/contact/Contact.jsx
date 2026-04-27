import React from 'react';
import SEO from '@/components/seo/SEO.jsx';
import phone from '@/assets/logos/phone.svg';
import email from '@/assets/logos/email.png';
import instagram from '@/assets/logos/instagram.svg';
import facebook from '@/assets/logos/fb.png';
import './Contact.scss';
import Button from '@/components/button/Button.jsx';
const Contact = () => (
  <div className="contact">
    <SEO
      title="Contact"
      description="Prendre rendez-vous pour une séance de sonothérapie, massage au bol tibétain ou voyage sonore à Fréjus / Saint-Raphaël. Téléphone, email, réservation en ligne."
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact sonothérapie Fréjus',
        description: 'Coordonnées et réservation pour séances de relaxation, voyages sonores, massage au bol.'
      }}
    />
    <div className="contact-content">
      <div className="contact-text-block">
        <span className="main-title">Prendre contact</span>
        <p className="contact-intro">
          Pour toute question, information ou prise de rendez-vous, je suis à votre écoute.
          <br />
          Choisissez le moyen qui vous convient le mieux :
        </p>
        <div className="contact-infos">
          <div className="contact-info">
            <a href="tel:0745040663" className="contact-info-link">
              <img src={phone} className="contact-logo" alt="Téléphone" />
              <span>07 45 04 06 63</span>
            </a>
          </div>
          <div className="contact-info">
            <a href="mailto:c.charleux83@gmail.com" className="contact-info-link">
              <img src={email} className="contact-logo" alt="Email" />
              <span>c.charleux83@gmail.com</span>
            </a>
          </div>
          <div className="contact-info">
            <a
              href="https://wa.me/message/WMPXBDYMIGODH1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-link"
            >
              WhatsApp Business
            </a>
          </div>
        </div>
        <div className="contact-calendly-block">
          <h2 className="contact-calendly-title">
            ✨ Suivez nous sur les réseaux sociaux pour avoir les dernières actualités
          </h2>
          <div className="social-links">
            <a
              href="https://www.instagram.com/liberation_corps_et_esprit?igsh=ejFxOWhrbm04bHR6"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <img src={instagram} alt="Instagram" className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/share/1LAdidvrxy/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <img src={facebook} alt="Facebook" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="contact-newsletter-block">
        <h2 className="contact-calendly-title">📰 Inscrivez-vous à la Newsletter</h2>
        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="contact-newsletter-form"
          action="/"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input type="hidden" name="bot-field" />
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="firstname">Prénom *</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Votre prénom"
                required
                autoComplete="given-name"
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="lastname">Nom</label>
              <input type="text" name="lastname" id="lastname" placeholder="Votre nom" autoComplete="family-name" />
            </div>
          </div>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" name="email" id="email" placeholder="Votre email" required autoComplete="email" />
            </div>
            <div className="contact-form-group">
              <label htmlFor="phone">Numéro (optionnel)</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Votre numéro"
                autoComplete="tel"
                pattern="^(\+33|0)[1-9](\d{2}){4}$"
                title="Veuillez entrer un numéro français valide"
              />
            </div>
          </div>
          <Button type="submit" variant="secondary">
            S'inscrire
          </Button>
        </form>
      </div>
    </div>
  </div>
);
export default Contact;
