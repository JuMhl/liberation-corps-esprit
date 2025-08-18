import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
  const links = [
    { title: 'Accueil', path: '/' },
    { title: 'Programme', path: '/programme' },
    { title: 'Accompagnements', path: '/accompagnements' },
    { title: 'Kateri Créations', path: '/kateri-creations' },
    { title: 'À Propos', path: '/a-propos' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="container-links">
          {links.map((link, index) => {
            return (
              <NavLink key={index} className="link" to={link.path}>
                {link.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
