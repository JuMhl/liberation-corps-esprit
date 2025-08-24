import React from 'react';
import { Link } from 'react-router-dom';

import './ContactButton.scss';

const ContactButton = () => {
  return (
    <Link to={'/contact'} className="contact-btn">
      Contactez-moi
    </Link>
  );
};

export default ContactButton;
