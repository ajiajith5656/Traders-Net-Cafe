import React from 'react';
import { Link } from 'react-router-dom';
import './HomeAboutIntro.css';

const HomeAboutIntro = () => {
  return (
    <section className="home-about-intro" aria-labelledby="home-about-intro-title">
      <div className="home-about-intro__container">
        <h2 className="home-about-intro__title" id="home-about-intro-title">ABOUT US</h2>

        <p className="home-about-intro__text home-about-intro__text--first">
          Welcome to Traders Net Cafe Sfz LLC — built for those who believe practice is the real teacher.
        </p>

        <p className="home-about-intro__text">
          Think of this as your daily market gym — where charts replace textbooks, discipline replaces guesswork, and every session adds strength to your skill. You don’t just watch the market here, you engage with it, refine your approach, and grow through repetition.
        </p>

        <p className="home-about-intro__text">
          All of this happens with real-time guidance from experienced mentors, helping you stay on track, correct mistakes, and build confidence as you practice.
        </p>

        <Link to="/about" className="home-about-intro__cta" aria-label="Continue to About Us page">
          Continue
        </Link>
      </div>
    </section>
  );
};

export default HomeAboutIntro;