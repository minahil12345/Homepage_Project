import React from 'react';
import './Section3.css';
import picture1 from '../Background1.svg';
import picture2 from '../Background2.svg'; 
import Picture from '../Section3Pic.svg';

const Section3 = () => {
  return (
    <section className="section3">
      <img src={picture1} alt="Background 1" className="background-picture1" />
      <img src={picture2} alt="Background 2" className="background-picture2" />
      <div className="green-row"></div>
      <div className="red-row">
        <div className="red-column">
          <div className="red-column-top">
           <div className="column-content">
              <span className="large-text">90+</span>
              <span className="small-text">Total Projects</span>
            </div>
          </div>
          <div className="red-column-bottom"></div>
        </div>
        <div className="orange-column">
          <div className="orange-column-top"></div>
          <div className="orange-column-bottom">
          <div className="column-content">
              <span className="large-text">50+</span>
              <span className="small-text">Total Projects</span>
            </div>
          </div>
        </div>
        <div className="yellow-column">
          <div className="yellow-column-top">
          <div className="column-content">
              <span className="large-text">99%</span>
              <span className="small-text">Total Projects</span>
            </div>
          </div>
          <div className="yellow-column-bottom"></div>
        </div>
        <div className="purple-column">
          <div className="purple-column-top"></div>
          <div className="purple-column-bottom">
          <div className="column-content">
              <span className="large-text">20%</span>
              <span className="small-text">Surpassed Goals</span>
            </div>
          </div>
        </div>
        <div className="pink-column">
          <div className="pink-column-top">
          <div className="column-content">
              <span className="large-text">73%</span>
              <span className="small-text">Customers Funded</span>
            </div>
          </div>
          <div className="pink-column-bottom"></div>
        </div>
      </div>
      <div className="blue-row">
        <div className="blue-column-left">
          <img src={Picture} alt="A hand open" className="picture3" />
        </div>
        <div className="blue-column-right">
          <div className="right-column-row1">
            <div className="team-text-container">
              <span className="team-text">Our Team, </span>
              <br></br>
              <span className="team-text">Your </span>
              <span className="projects-text">Projects</span>
            </div>
          </div>
          <div className="right-column-row2">
            <div className="description-text">
              We work as a White-Label firm, closing the details of our work with you with an NDA, and being part of your project from Pitch to Funding.
            </div>
          </div>
          <div className="right-column-row3">
          <div className="transparent-button">
              <span className="transparent-button-text">
                Read More
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="orange-row"></div>
    </section>
  );
};

export default Section3;
