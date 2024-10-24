import React from "react";
import './Footer.css';
import Logo from '../Logo.png'; 
import InstagramIcon from '../InstaIcon.svg';
import TwitterIcon from '../TwitterIcon.svg';
import LinkedInIcon from '../LinkedInIcon.svg';

function Footer() {
  return (
    <footer className="footer">
    <div className="head">
        <img src={Logo} alt="Logo" className="logo-footer" />
        <nav className="navigation-menu">
        <a href="#home" className="menuItem">Home</a>
        <a href="#about" className="menuItem">About me</a>
        <a href="#contact" className="menuItem">Contact me</a>
        </nav>
    </div>
    
    <div className="content">
        <p className="footer-statement">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem risus, ullamcorper vel 
        bibendum sed, egestas imperdiet metus. Duis mattis massa eget augue semper, id volutpat dui
        dictum. Integer ultricies non ex eu dapibus.
        </p>
        <div className="socialLinks">
            <img src={InstagramIcon} alt="Instagram" className="socialIcon" />
            <img src={TwitterIcon} alt="Twitter" className="socialIcon" />
            <img src={LinkedInIcon} alt="LinkedIn" className="socialIcon" />
        </div>
        <div className="divider"></div>
    </div>
    
    <p className="copyright">© Copyright 2023, All Rights Reserved</p>
   
    </footer>

  );
}

export default Footer;