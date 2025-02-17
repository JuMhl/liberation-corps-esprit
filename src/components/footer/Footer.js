import React from 'react';
import instaLogo from '../../assets/instagram.svg';
import fbLogo from '../../assets/fb.png';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="info-container">
        <h1 className="title">Catherine Charleux</h1>
        <div className="logo-container">
          <a
            href="https://www.instagram.com/liberation_corps_et_esprit?igsh=ejFxOWhrbm04bHR6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instaLogo} className="logo" alt="insta" />
          </a>
          <a href="https://www.facebook.com/share/1LAdidvrxy/" target="_blank" rel="noopener noreferrer">
            <img src={fbLogo} className="logo" alt="fb" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
