import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { title: 'Accueil', path: '/' },
    { title: 'Programme', path: '/programme' },
    { title: 'Accompagnements', path: '/accompagnements' },
    { title: 'À Propos', path: '/a-propos' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
    { title: 'Kateri Créations', path: '/kateri-creations' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`container-links ${isOpen ? 'open' : ''}`}>
          {links.map((link, index) => {
            return (
              <NavLink key={index} className="link" to={link.path} onClick={() => setIsOpen(false)}>
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
