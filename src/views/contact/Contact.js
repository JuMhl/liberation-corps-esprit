import React from 'react';
import phone from '../../assets/logos/phone.svg';
import email from '../../assets/logos/email.svg';

import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h3>Contactez-moi</h3>
        <div className="contact-text">
          <img src={phone} className="contact-logo" alt="phone" />
          <span>07 45 04 06 63</span>
        </div>
        <div className="contact-text">
          <img src={email} className="contact-logo" alt="email" />
          <span>c.charleux83@gmail.com</span>
        </div>
        <div>
          <p>Ou sur WhatsApp Business en cliquant ici:</p>
          <a
            className="contact-link"
            href="https://wa.me/message/WMPXBDYMIGODH1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prendre rendez-vous maintenant
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
