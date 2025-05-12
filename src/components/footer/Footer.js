import React from 'react';
import instaLogo from '../../assets/logos/instagram.svg';
import fbLogo from '../../assets/logos/fb.png';
import whatsappLogo from '../../assets/logos/whatsapp.svg';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer bg-primary text-white d-flex align-items-center justify-content-center">
      <div className="info-container">
        <h1 className="title">Catherine Charleux</h1>
        <div className="logo-container">
          <a href="https://wa.me/message/WMPXBDYMIGODH1" target="_blank" rel="noopener noreferrer">
            <img src={whatsappLogo} className="footer-logo" alt="whatsapp" />
          </a>
          <a
            href="https://www.instagram.com/liberation_corps_et_esprit?igsh=ejFxOWhrbm04bHR6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instaLogo} className="footer-logo" alt="insta" />
          </a>
          <a href="https://www.facebook.com/share/1LAdidvrxy/" target="_blank" rel="noopener noreferrer">
            <img src={fbLogo} className="footer-logo" alt="fb" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
