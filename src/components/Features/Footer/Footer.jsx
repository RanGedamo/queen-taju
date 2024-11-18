// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h3>צור קשר</h3>
        <p>טלפון: 050-1234567</p>
        <p>אימייל: makeup@example.com</p>
        <p>כתובת: רח' היופי 10, תל אביב</p>
      </div>
      <div className="social-media">
      <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebook className="icon facebook-icon" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram className="icon instagram-icon" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter className="icon twitter-icon" />
      </a>
    </div>
    </div>
      <p className="copyright">© 2024 מאפרת מקצועית. כל הזכויות שמורות.</p>
    </footer>
  );
}

export default Footer;
