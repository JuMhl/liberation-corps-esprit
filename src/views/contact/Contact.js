import React from 'react';
import phone from '../../assets/logos/phone.svg';
import email from '../../assets/logos/email.png';

import './Contact.scss';

const Contact = () => {
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
              <img src={phone} className="contact-logo" alt="phone" />
              <span>07 45 04 06 63</span>
            </div>
            <div className="contact-info">
              <img src={email} className="contact-logo" alt="email" />
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
              className="contact-link"
              href="http://cal.com/catherine-charleux/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
