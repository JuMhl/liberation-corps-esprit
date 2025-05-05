import React from 'react';

import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <p>Contactez-moi sur Whatsapp business via ce lien :</p>
        <a
          className="contact-link"
          href="https://wa.me/message/WMPXBDYMIGODH1"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://wa.me/message/WMPXBDYMIGODH1
        </a>
      </div>
    </div>
  );
};
export default Contact;
