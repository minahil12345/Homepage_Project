import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Section1.css';
import LetsGoBtn from './Section1/LetsGoBtn';
import RightPaneText from './Section1/RightPaneText';
import Stamp from './Section1/Stamp';
import ImageContainer from './Section1/ImageContainer';

const Section1 = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (clicked) {
      navigate('/lets-go');
    }
  }, [clicked, navigate]);

  const handleButtonClick = () => {
    console.log("Button is Pressed");
    setClicked(true);
  };

  return (
    <section className="content-section">
      <div className="left-column">
        <div className="green-row">
          <div className="green-inner-column">
            <div className="pink-row">
              <div className="pink-inner-column">
                <span className="wecreatefuture">WE</span>
              </div>
              <div className="purple-inner-column">
                <img src= {require('../settings.svg').default} alt="Settings Icon" className="settings-icon" />
              </div>
            </div>
            <div className="orange-row">
              <span className="wecreatefuture">CREATE</span>
            </div>
            <div className="green-inner-inner-column">
              <span className="future-text">FUTURE </span>
            </div>
          </div>
          <div className="yellow-inner-column">
            <div className="software-tech-text">SOFTWARE & TECHNOLOGY</div>
            <div className="description-SandT-text">
              Disruptive Developers for Disruptive Start-Ups. <br />
              We make your next Big Move, our Business.
            </div>
            <br></br>
            <br></br>
            <LetsGoBtn handleClick={handleButtonClick} />
          </div>
        </div>
        <ImageContainer />
      </div>
      <div className="right-column">
        <div className="right-column-row">
          <RightPaneText
            heading="0 TO 100"
            subheading="Complete Solutions"
            description="From idea to prototype and product, we help you get there."
          />
        </div>
        <div className="right-column-row">
          <RightPaneText
            heading="WHITE LABEL"
            subheading="No Risks"
            description="We work under strict NDA rules, always being part of your strategy."
          />
        </div>
        <div className="right-column-row">
          <RightPaneText
            heading="TOP TALENT"
            subheading="Experience at your service"
            description="A team of technology specialists that will allow faster and bolder moves."
          />
        </div>
        <Stamp />
      </div>
    </section>
  );
};

export default Section1;
