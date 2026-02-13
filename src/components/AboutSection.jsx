import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__video-wrapper">
          <video
            className="about__video"
            autoPlay
            muted
            loop
            playsInline
            poster=""
          >
            <source
              src="https://res.cloudinary.com/dufnwlqeq/video/upload/v1766687935/Business_Website_doswp6.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
