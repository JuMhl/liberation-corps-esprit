import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Ferme le menu si clic / touch en dehors
  useEffect(() => {
    function handleClickOutside(e) {
      if (!isOpen) return;
      const menuEl = menuRef.current;
      const buttonEl = buttonRef.current;
      if (menuEl && !menuEl.contains(e.target) && buttonEl && !buttonEl.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);
  const links = [
    { title: 'Accueil', path: '/' },
    { title: 'Programme', path: '/programme' },
    { title: 'Accompagnements', path: '/accompagnements' },
    { title: 'À Propos', path: '/a-propos' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
    { title: 'Kateri Créations', path: '/kateri-creations' }
  ];
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="navbar">
      <div className="nav-container">
        <button ref={buttonRef} className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div ref={menuRef} className={`container-links ${isOpen ? 'open' : ''}`}>
          {links.map((link, index) => (
            <NavLink key={index} className="link" to={link.path} onClick={() => setIsOpen(false)}>
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NavBar;
