import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero__grid">
          <article className="services-card services-card--pill">
            <h2>Trading Lounge</h2>
            <p>
              Step into our high-speed trading zone — equipped with pro-level setups,
              real-time market screens, and powerful Wi-Fi. Trade, track, and triumph
              — all with a cup of coffee in hand.
            </p>
          </article>

          <article className="services-card services-card--pill">
            <h2>Learning Pods</h2>
            <p>
              Mini study hubs where beginners and pros exchange knowledge. Attend
              micro-sessions on Forex, Crypto, and Stock trading — or host your own
              session to teach and inspire!
            </p>
          </article>
        </div>
      </section>

      <section className="services-section services-section--right-cards">
        <div className="services-section__container services-section__container--right">
          <article className="services-card services-card--round">
            <h3>Trader Connect</h3>
            <p>
              Meet fellow traders, investors, and financial enthusiasts. Network over
              cappuccinos, share insights, or form trading circles – your next big idea
              might start here.
            </p>
          </article>

          <article className="services-card services-card--round">
            <h3>Coffee & Charts</h3>
            <p>
              Our signature event! A casual blend of market talk and mocha. Discuss
              global trends, price actions, and strategies — every sip fuels your next
              move.
            </p>
          </article>

          <article className="services-card services-card--round">
            <h3>Mentorship Zone</h3>
            <p>
              Book 1-on-1 or group sessions with experienced traders. Learn smart
              strategies, risk management, and market psychology — practical wisdom
              brewed fresh daily.
            </p>
          </article>
        </div>
      </section>

      <section className="services-section">
        <div className="services-section__container services-section__container--split">
          <div className="services-image-box">
            <img
              src="https://res.cloudinary.com/dufnwlqeq/image/upload/v1766691716/Business_Website_zm7hlq.png"
              alt="Global Market Café Stream"
            />
          </div>

          <div className="services-stack">
            <article className="services-card services-card--round">
              <h3>Global Market Café Stream</h3>
              <p>
                Live market screens featuring Forex, stocks, and crypto updates –
                projected in real-time. Stay connected to the world&apos;s pulse as you sip
                and study.
              </p>
            </article>

            <article className="services-card services-card--round">
              <h3>Simulation Corner</h3>
              <p>
                Test your trading skills in a demo environment – risk-free and
                realistic. Compete in &quot;Trading Battles&quot; or challenge your friends for
                the top spot!
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="services-section services-section--workshop">
        <article className="services-card services-card--pill services-card--center">
          <h3>TRADING WORKSHOPS</h3>
          <p>
            Learn at your pace. From beginner to pro-level — tailored programs on
            Forex, Crypto, Stocks, and Technical Analysis — with certifications.
          </p>
        </article>
      </section>

      <section className="services-section">
        <div className="services-section__container services-section__container--split">
          <div className="services-image-box services-image-box--landscape">
            <img
              src="https://res.cloudinary.com/dufnwlqeq/image/upload/v1766570497/Untitled_600_x_600_px_500_x_500_px_jjejss.png"
              alt="Trader community collaborating"
            />
          </div>

          <div className="services-stack">
            <article className="services-card services-card--round">
              <h3>Investment Talk Nights</h3>
              <p>
                Weekly community sessions where experts, guests, or even members
                share insights about trading, investing, and financial independence —
                in a cozy café vibe.
              </p>
            </article>

            <article className="services-card services-card--round">
              <h3>Chill & Create Zone</h3>
              <p>
                A relaxed spot to brainstorm business ideas, journal your trades, or
                simply enjoy creative conversations. Because great minds think better
                over good coffee.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
