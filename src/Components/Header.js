import React from 'react';
import './Header.css';
import Logo from '../Logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="logo" />
      <nav className="menu">
        <a href="about" className="menu-item">About</a>
        <a href="roadmap" className="menu-item">Road Map</a>
        <a href="pricing" className="menu-item">Pricing</a>
        <a href="team" className="menu-item">Team</a>
      </nav>
    </header>
  );
};

export default Header;
