import React from 'react';
import './Home.css';
import Header from '../Components/Header';
import Section1 from '../Components/Section1'; 
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import Section4 from '../Components/Section4';
import Section5 from '../Components/Section5';
import Section6 from '../Components/Section6';
import Section7 from '../Components/Section7';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="home-container">
      <div className="eclipse1"></div>
      <div className="eclipse2"></div>
      <div className="eclipse3"></div>
      <div className="eclipse4"></div>
      <div className="eclipse5"></div>
      <div className="eclipse6"></div>
      <div className="eclipse7"></div>
      <div className="eclipse8"></div>
      <div className="eclipse9"></div>
      <div className="eclipse10"></div>
      <Header />
      <div className="spacer"></div>
      <Section1 />
      <div className="spacer80"></div>
      <Section2 />
      <div className="spacer80"></div>
      <Section3 />
      <div className="spacer80"></div>
      <Section4 />
      <div className="spacer80"></div>
      <Section5 />
      <div className="spacer80"></div>
      <Section6 />
      <div className="spacer80"></div>
      <Section7 />
      <div className="spacer80"></div>
      <Footer />
    </div>
  );
};

export default Home;
