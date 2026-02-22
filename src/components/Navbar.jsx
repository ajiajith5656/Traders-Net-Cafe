import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goToContact = (event) => {
    event.preventDefault();
    closeMenu();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}>
      {/* Hamburger Button */}
      <button className="navbar__hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`navbar__hamburger-line ${menuOpen ? 'navbar__hamburger-line--open' : ''}`}></span>
        <span className={`navbar__hamburger-line ${menuOpen ? 'navbar__hamburger-line--open' : ''}`}></span>
        <span className={`navbar__hamburger-line ${menuOpen ? 'navbar__hamburger-line--open' : ''}`}></span>
      </button>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        <li><Link to="/" className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`} onClick={closeMenu}>HOME</Link></li>
        <li><Link to="/about" className={`navbar__link ${location.pathname === '/about' ? 'navbar__link--active' : ''}`} onClick={closeMenu}>ABOUT US</Link></li>
        <li><Link to="/services" className={`navbar__link ${location.pathname === '/services' ? 'navbar__link--active' : ''}`} onClick={closeMenu}>OUR SERVICES</Link></li>
        <li><Link to="/members" className={`navbar__link ${location.pathname === '/members' ? 'navbar__link--active' : ''}`} onClick={closeMenu}>MEMBERS</Link></li>
        <li><a href="#contact" className="navbar__link" onClick={goToContact}>CONTACT US</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
