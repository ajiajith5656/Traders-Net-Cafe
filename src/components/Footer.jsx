import React from 'react';
import './Footer.css';

const LOGO_URL = 'https://res.cloudinary.com/ditsmq3r6/image/upload/v1770831300/TRADERS_CAFE.pdf_fzwa4b_e_background_removal_f_png_rfytef.png';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        {/* Brand Column */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={LOGO_URL} alt="Traders Net Café" className="footer__logo-img" />
          </div>
          <p className="footer__description">
            A dedicated space to connect as a community, practice with purpose, and evolve as confident traders.
          </p>
        </div>

        {/* Contact Column */}
        <div className="footer__column">
          <h3 className="footer__heading">CONTACT</h3>

          <div className="footer__contact-item">
            <span className="footer__label">LOCATION</span>
            <p>Traders Net Cafe<br />AL KAZIM BUILDING 2nd floor 213 Block A<br />Al Ittihad Road, Dubai</p>
          </div>

          <div className="footer__contact-item">
            <span className="footer__label">PHONE</span>
            <p><a href="tel:+971504161426">+971 504161426</a></p>
          </div>

          <div className="footer__contact-item">
            <span className="footer__label">EMAIL</span>
            <p><a href="mailto:tradersnetcafe@gmail.com">tradersnetcafe@gmail.com</a></p>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer__column">
          <h3 className="footer__heading">QUICK LINKS</h3>
          <ul className="footer__nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#members">Membership</a></li>
          </ul>
        </div>

        {/* Social Column */}
        <div className="footer__column footer__column--social">
          <h3 className="footer__heading">FOLLOW US</h3>
          <div className="footer__socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">© 2025 TRADERS NET CAFE. ALL RIGHTS RESERVED.</p>
        <div className="footer__legal">
          <a href="#privacy">PRIVACY POLICY</a>
          <a href="#terms">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
