import React from 'react';
import { Link } from 'react-router-dom';
import './ContactButton.scss';
const ContactButton = () => (
  <Link to={'/contact'} className="contact-btn">Contactez-moi</Link>
);
export default ContactButton;
