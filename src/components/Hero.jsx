import React from 'react';
import './Hero.css';

const LOGO_URL = 'https://res.cloudinary.com/ditsmq3r6/image/upload/v1770831300/TRADERS_CAFE.pdf_fzwa4b_e_background_removal_f_png_rfytef.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <img src={LOGO_URL} alt="Traders Net Café" className="hero__center-logo" />
        <div className="hero__scroll">
          <span className="hero__scroll-text">SCROLL</span>
          <div className="hero__scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
