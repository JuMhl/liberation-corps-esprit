import React from 'react';
import phone from '../../assets/logos/phone.svg';
import email from '../../assets/logos/email.png';

import './Contact.scss';

const Contact = () => {
  // const [submitted, setSubmitted] = useState(false);

  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-text-block">
          <h1 className="contact-title">Prendre contact</h1>
          <p className="contact-intro">
            Pour toute question, information ou prise de rendez-vous, je suis à votre écoute.
            <br />
            Choisissez le moyen qui vous convient le mieux :
          </p>
          <div className="contact-infos">
            <div className="contact-info">
              <img src={phone} className="contact-logo" alt="Téléphone" />
              <span>07 45 04 06 63</span>
            </div>
            <div className="contact-info">
              <img src={email} className="contact-logo" alt="Email" />
              <span>c.charleux83@gmail.com</span>
            </div>
            <div className="contact-info">
              <a
                href="https://wa.me/message/WMPXBDYMIGODH1"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp"
              >
                WhatsApp Business
              </a>
            </div>
          </div>
          <div className="contact-calendly-block">
            <h2 className="contact-calendly-title">✨ Ou réservez directement en ligne :</h2>
            <a
              className="contact-btn"
              href="http://cal.com/catherine-charleux/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>

        <div className="contact-newsletter-block">
          <h2 className="contact-calendly-title">📰 Inscrivez-vous à la Newsletter</h2>
          {/* {submitted ? (
            <div className="contact-note">✨ Merci pour votre inscription ! Vous recevrez bientôt nos actualités.</div>
          ) : ( */}
          <form
            name="newsletter"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="contact-newsletter-form"
            action="/"
            // onSubmit={() => setSubmitted(true)}
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
            <button type="submit" className="contact-btn">
              S'inscrire
            </button>
          </form>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
