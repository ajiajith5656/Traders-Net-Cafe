import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      {/* About Description */}
      <section className="aboutus-desc">
        <h1 className="aboutus-desc__heading">ABOUT US</h1>
        <div className="aboutus-desc__container">
          <p className="aboutus-desc__text">
            Ever wondered what it feels like to sit beside experienced market participants and stay connected as markets move? Traders Net Café is a community-focused professional training space built for individuals who believe growth comes from practice, exposure, and shared experience.
          </p>
          <p className="aboutus-desc__text">
            Licensed as a professional training establishment, we provide a structured environment where participants can connect with an experienced group, engage with live markets, and practice independently. This is not a certification or classroom-based setup — learning here happens organically through real-time market observation, discussion, and consistent practice.
          </p>
          <p className="aboutus-desc__text">
            Our community brings together participants engaged with global markets, working independently while benefiting from shared observations, discipline, and the collective presence of an experienced market group.
          </p>
          <p className="aboutus-desc__text">
            At Traders Net Café, it's about clarity, consistency, and growing together through real market experience.
          </p>
        </div>

        {/* Single Image */}
        <div className="aboutus-banner">
          <img
            src="/images/about.png"
            alt="Traders Net Café community"
            className="aboutus-banner__img"
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="aboutus-vm">
        <div className="aboutus-vm__container">
          <div className="aboutus-vm__left">
            <div className="aboutus-vm__block">
              <h2 className="aboutus-vm__heading">OUR VISION</h2>
              <p>
                To create a premium, knowledge-driven market community where participants grow with clarity, discipline, and independence—supported by a professional environment that fosters learning, collaboration, and protected from manipulation and guided by shared insight and experience.
              </p>
            </div>
            <div className="aboutus-vm__block">
              <h2 className="aboutus-vm__heading">OUR MISSION</h2>
              <p>
                At Traders Net Café, we provide a professional, practice-driven environment where participants connect with experienced peers and engage with live markets. Our mission is to help individuals develop knowledge, discipline, and emotional control, fostering independent decision-making in complex market environments. By encouraging collaboration, shared insight, and consistent practice, we create a supportive, market-focused community where every participant can grow with clarity, confidence, and purpose.
              </p>
            </div>
          </div>
          <div className="aboutus-vm__right">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80" alt="Our Vision & Mission" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
