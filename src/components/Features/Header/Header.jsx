import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">Beautify</div>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#home">המלצות לקוחות</a></li>
          <li><a href="#about">עבודות</a></li>
          <li><a href="#services">יצירת קשר</a></li>
        </ul>

        {/* כפתור המבורגר */}
        <button className="hamburger-button" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
