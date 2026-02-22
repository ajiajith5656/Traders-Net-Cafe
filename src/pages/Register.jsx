import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const timerRef = useRef([]);

  useEffect(() => {
    return () => {
      timerRef.current.forEach((timerId) => clearTimeout(timerId));
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const submitTimer = setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      const redirectTimer = setTimeout(() => {
        navigate('/members');
      }, 3000);

      timerRef.current.push(redirectTimer);
    }, 1200);

    timerRef.current.push(submitTimer);
  };

  return (
    <div className="register-page">
      <section className="register-card">
        <Link to="/members" className="register-back">← BACK</Link>

        <h1 className="register-title">REGISTRATION</h1>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-grid">
            <div className="register-field">
              <label htmlFor="firstName">FIRST NAME</label>
              <input id="firstName" type="text" placeholder="First Name" />
            </div>

            <div className="register-field">
              <label htmlFor="middleName">MIDDLE NAME</label>
              <input id="middleName" type="text" placeholder="Middle Name (Optional)" />
            </div>

            <div className="register-field">
              <label htmlFor="surname">SURNAME</label>
              <input id="surname" type="text" placeholder="Surname" />
            </div>

            <div className="register-field">
              <label htmlFor="mobile">MOBILE NUMBER</label>
              <input id="mobile" type="tel" placeholder="+971 — — — —" />
            </div>

            <div className="register-field register-field--full">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input id="email" type="email" placeholder="email@example.com" />
            </div>

            <div className="register-field">
              <label htmlFor="firstTime">FIRST TIME?</label>
              <select id="firstTime" defaultValue="Yes">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="register-field">
              <label htmlFor="level">LEVEL</label>
              <select id="level" defaultValue="Basic">
                <option>Basic</option>
                <option>Mid Level</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>

          <button type="submit" className="register-submit" disabled={isSubmitting}>
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
          </button>
        </form>
      </section>

      {showSuccess && (
        <div className="register-dialog-overlay" role="presentation">
          <div className="register-dialog" role="dialog" aria-modal="true" aria-labelledby="register-success-title">
            <h2 id="register-success-title">Registration Successful</h2>
            <p>
              We have received your registration details. Our team will contact you shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;