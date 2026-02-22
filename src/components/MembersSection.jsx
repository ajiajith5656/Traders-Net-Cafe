import React from 'react';
import { Link } from 'react-router-dom';
import './MembersSection.css';

const MembersSection = () => {
  return (
    <section className="members" id="members">
      <div className="members__container">
        <article className="members__card">
          <h2>MEMBERSHIP</h2>
          <div className="members__actions">
            <Link to="/register" className="members__register">Register</Link>
          </div>
          <h3>Become a member of Traders Net Café</h3>

          <p>
            Join us where focused practice leads to mastery, learning happens together, and a
            community of like-minded individuals supports your growth.
          </p>

          <h4>Monthly Membership Plans</h4>
          <p>AED 499 / Month (Basic)</p>
          <p>AED 799/ Month (Advanced)</p>
          <p>Affordable solutions for dedicated market players.</p>

          <h4>What&apos;s Included:</h4>
          <ul>
            <li>Access to Traders Net Café environment</li>
            <li>Observation sessions</li>
            <li>Practice setups for U.S. instruments</li>
            <li>Interaction with experienced traders</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default MembersSection;