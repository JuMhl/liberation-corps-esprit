import React from 'react';
import { NavLink } from 'react-router-dom';
import mandala from '../../assets/mandala-violet.png';
import dreamcatcher from '../../assets/attrape-reves.png';

import './NavBar.css';

const NavBar = () => {
  const links = [
    { title: 'Accueil', path: '/' },
    { title: 'Programme', path: '/programme' },
    // { title: 'Sonothérapie', path: '/sonotherapie' },
    // { title: 'Relaxation Bio-Dynamique', path: '/relaxation-bio-dynamique' },
    // { title: 'Kateri Créations', path: '/kateri-creations' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <div className="navbar">
      <div className="nav-container">
        <img src={mandala} className="nav-logo" alt="logo" />
        <div className="container-links">
          {links.map((link, index) => {
            return (
              <NavLink key={index} className="link" to={link.path}>
                {link.title}
              </NavLink>
            );
          })}
        </div>
        <img src={dreamcatcher} className="nav-logo-dreamcatcher" alt="logo" />
      </div>
    </div>
  );
};
export default NavBar;
