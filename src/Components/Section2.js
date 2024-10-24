import React from 'react';
import './Section2.css';
import SettingsIcon1 from '../Settings2.svg';
import SettingsIcon2 from '../Settings3.svg';
import Picture from '../Section2Pic.svg';

const Section2 = () => {
  return (
    <section className="section2">
      <div className="row">
        <div className="red-column">
          <div className="text-container">
            <span className="about-text">About Beyond</span>
            <span className="humans-text"> Humans</span>
          </div>
          <div className="description">
            Having experience as previous Start-up founders, we found that for most of today's projects, an IT Team was mandatory. This leaves a lot of great ideas between a rock and a hard place, where they need to choose to wait and possibly lose the opportunity or to expend a huge amount of resources building an internal team.
            <br /><br />
            The solution was clear for us, but not easy to step up, as we choose to maintain a high-level of secrecy on our customers' requirements and solutions. Keeping us in a position where we can't show a track record of previous projects.
            <br /><br />
            We created Beyond Humans to be part of the challenge, based on our will and desire to have an impact on future companies. We share the ride with all kinds of companies that defy the status quo.
          </div>
          
        </div>
        <div className="blue-column">
          <img src={SettingsIcon1} alt="SettingsIcon1" className="settingsIcon1" />
          <img src={SettingsIcon2} alt="SettingsIcon2" className="settingsIcon2" />
          <img src={Picture} alt="A hand pointing downwards" className="picture" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
