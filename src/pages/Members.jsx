import React from "react";
import { Link } from "react-router-dom";
import { Crown, Flame } from "lucide-react";
import "./Members.css";

const Members = () => {
  return (
    <div className="mem-page">

      {/* HERO */}
      <section className="mem-hero">
        <div className="mem-hero__overlay"></div>

        <div className="mem-hero__bottom">
          <h1 className="mem-hero__heading">Membership</h1>
          <p className="mem-hero__subtitle">Become a member of Traders Net Café</p>
        </div>
      </section>

      {/* PRICING */}
      <section className="mem-pricing">
        <div className="mem-container">

          <div className="mem-cta-row">
            <p className="mem-cta-desc">
              Join us where focused practice leads to mastery,
              learning happens together, and a community of
              like-minded individuals supports your growth.
            </p>

            <div className="mem-cta-buttons">
              <Link to="/register" className="mem-btn-outline">
                Register
              </Link>
              <Link to="/login" className="mem-btn-outline">
                Login
              </Link>
            </div>
          </div>

          <h2 className="mem-section-title">
            <span className="mem-title-white">Monthly</span>{" "}
            <span className="mem-title-green">Membership</span>{" "}
            <span className="mem-title-gold">Plans</span>
          </h2>

          <div className="mem-pricing-grid">

            {/* BASIC */}
            <div className="mem-card">
              <div className="mem-icon mem-icon--green">
                <Crown size={28} />
              </div>
              <h3>AED <strong>499/-</strong></h3>
              <p className="mem-price-sub">Month (Basic)</p>
            </div>

            {/* ADVANCED */}
            <div className="mem-card">
              <div className="mem-icon mem-icon--orange">
                <Flame size={28} />
              </div>
              <h3>AED <strong>799/-</strong></h3>
              <p className="mem-price-sub">Month (Advanced)</p>
            </div>

            {/* DEDICATED */}
            <div className="mem-card">
              <h3 className="mem-dedicated">
                Affordable solutions for <span>dedicated market players.</span>
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="mem-included">
        <div className="mem-container">
          <h2 className="mem-section-title mem-section-title--white mem-included__title">
            <span className="mem-title-white">What's </span>
            <span className="mem-title-gold">Included:</span>
          </h2>

          <div className="mem-included-grid">

            <ul>
              <li>Entry to your space (Traders Net Café)</li>
              <li>Dedicated practice sessions</li>
              <li>High-speed internet & charting setup</li>
              <li>Flexible timings</li>
              <li>Silent focus zone + discussion zone</li>
              <li>Live market walkthroughs</li>
              <li>Real-Time Edge</li>
              <li>Mentor-led live observations</li>
              <li>Mistake breakdown sessions (learning from losses)</li>
              <li>Community & Support</li>
            </ul>

            <ul>
              <li>Members-only discussion group</li>
              <li>Peer learning & idea sharing</li>
              <li>Weekly Q&A / doubt clearing</li>
              <li>Growth Tracking</li>
              <li>Personal progress tracking</li>
              <li>Trade review feedback</li>
              <li>Monthly performance check-ins</li>
              <li>Improvement roadmap</li>
              <li>Guest sessions / expert talks</li>
              <li>Psychology sessions</li>
              <li>Referral rewards or loyalty perks</li>
            </ul>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Members;