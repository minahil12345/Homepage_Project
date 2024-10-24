import React from 'react';
import './Section4.css';
import picture1 from '../Icon1.svg';
import picture2 from '../Icon2.svg';
import picture3 from '../Icon3.svg';
import picture4 from '../Icon4.svg';

const Section4 = () => {
  return (
    <section className="section4">
      <div className="row1">
        <div className="text-container-2">
          <span className="solution-text">Solution </span>
          <span className="focus-areas-text">& Focus Areas</span>
        </div>
      </div>
      <div className="row2">
        <div className="columns-container">
          <div className="column4">
            <div className="column-row">
              <img src={picture1} alt="Magnifying glass icon"  className="icon4" />
            </div>
            <div className="column-row heading">Research and Development</div>      
            <div className="column-row">
              <span className="explaination">From the idea, we take care of the process until you get a materialized version of it.</span>
            </div>
            <div className="column-row">
              <a href="/learn-more/Research-and-Development" className="learn-more">Learn More</a>
            </div>
          </div>
          <div className="column4">
            <div className="column-row">
               <img src={picture2} alt="Coding Screen Icon" className="icon4" />
            </div>
            <div className="column-row heading">Software Development</div>
            <div className="column-row">
                <span className="explaination">You need and app? A game? A site?. We've got you covered.</span>
            </div>
            <div className="column-row">
                <a href="/learn-more/Software-Development" className="learn-more">Learn More</a>
            </div>
          </div>
          <div className="column4">
            <div className="column-row">
               <img src={picture3} alt="IT management icon" className="icon4" />
            </div>
            <div className="column-row heading">IT Management</div>
            <div className="column-row">
               <span className="explaination">We bring the right people together for your project.</span>
            </div>
            <div className="column-row">
                <a href="/learn-more/IT-Management" className="learn-more">Learn More</a>
            </div>
          </div>
          <div className="column4">
            <div className="column-row">
              <img src={picture4} alt="Cloud Icon" className="icon4" />
            </div>
            <div className="column-row heading">Cloud Computing</div>
            <div className="column-row">
                <span className="explaination">Anywhere, anytime. We make our solutions available for you, no limits.</span>
            </div>
            <div className="column-row">
                <a href="/learn-more/Cloud-Computing" className="learn-more">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
