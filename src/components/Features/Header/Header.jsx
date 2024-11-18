import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      
      <nav class="navbar">
        <div class="navbar-logo">Beautify</div>
        <ul class="navbar-links">
            <li><a href="#home">המלצות לקוחות</a></li>
            <li><a href="#about">עבודות</a></li>
            <li><a href="#services">יצירת קשר</a></li>

        </ul>
    </nav>
      {/* <div className="hamburger-menu">
        <i className="fa fa-bars"></i>
      </div> */}
    </header>
  );
};

export default Header;
