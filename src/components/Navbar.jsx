import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <ul className="navbar__links">
        <li><Link to="/" className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`}>HOME</Link></li>
        <li><Link to="/about" className={`navbar__link ${location.pathname === '/about' ? 'navbar__link--active' : ''}`}>ABOUT US</Link></li>
        <li><a href="#members" className="navbar__link">MEMBERS</a></li>
        <li><a href="#contact" className="navbar__link">CONTACT US</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
