import React, { useState } from 'react';
import './Section6.css';
import picture1 from '../Icon5.svg';
import picture2 from '../Icon6.svg';
import picture3 from '../Icon7.svg';
import userPic1 from '../UserPic1.svg'; // Add user pictures
import userPic2 from '../UserPic2.svg';
import MoveNext from '../moveNext.svg';
import MovePrev from '../movePrev.svg'
// import userPic3 from '../userPic3.jpg';
// import userPic4 from '../userPic4.jpg';

const reviews = [
  {
    userName: "JOHN",
    rating: 5,
    reviewText: "We were able to go from Lab to product in months, with a team of developers that surpassed our expectation.",
    userPic: userPic1,
  },
  {
    userName: "KATE",
    rating: 4,
    reviewText: "Experimentation without a team was impossible for me before I meet this guys. Amazing job being flexible!",
    userPic: userPic2,
  },
  {
    userName: "Alex Johnson",
    rating: 5,
    reviewText: "Outstanding work! Very satisfied.",
    userPic: userPic2,
  },
  {
    userName: "Emily Davis",
    rating: 3,
    reviewText: "Satisfactory but can improve.",
    userPic: userPic1,
  },
];

const Section6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 2 : prevIndex - 2
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 2 ? 0 : prevIndex + 2
    );
  };

  return (
    <section className="section6">
      <div className="row61">
        <div className="text-container-61">
          <span className="our-text">OUR </span>
          <span className="approach-text">APPROACH</span>  
        </div>
      </div>
      <div className="row62">
        <div className="text-content-62">
          We take our clients' privacy very seriously, so we don’t share any details on past projects. 
          But we can talk in-depth about the solutions we worked on, and we will be open to show our skills for reassurance.
        </div>
      </div>
      <br />
      <br></br>
      <div className="information-row">
        <div className="left-side">
            <img src={picture1} alt="Bag Icon"  className="symbol" />
        </div>
        <div className="right-side">
            <div className="experience-and-aesthetics">Experience & Aesthetics</div>
            <br></br>
            <div className="exp">Always working in the balance between User Interface, User Experience and Functionality.</div>
        </div>
      </div>
      
      <div className="information-row">
        <div className="left-side">
            <img src={picture2} alt="Bag Icon"  className="symbol" />
        </div>
        <div className="right-side">
            <div className="experience-and-aesthetics">Latest Technologies</div>
            <br></br>
            <div className="exp">We always choose the state of the art in terms of tools, so your solutions are future proof.</div>
        </div>
      </div>
      <div className="information-row">
        <div className="left-side">
            <img src={picture3} alt="Bag Icon"  className="symbol" />
        </div>
        <div className="right-side">
            <div className="experience-and-aesthetics">Lean & Transparent Process</div>
            <br></br>
            <div className="exp">Our methodologies are based on Agile and Lean, giving you control and visibility, but always moving as fast as possible... and beyond.</div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <div className="column icon-column" onClick={handlePrevClick}>
          <img src={MovePrev} alt="Icon 1" className="icon" />
        </div>
        {reviews.slice(currentIndex, currentIndex + 2).map((review, index) => (
          <div className="column content-column" key={index}>
            <div className="content-row">
              <div className="user-pic">
                <img src={review.userPic} alt="User DP" className="user-dp" />
              </div>
              <div className="user-info">
                <div className="user-name">{review.userName}</div>
                <div className="user-rating">
                  {"⭐".repeat(review.rating)}
                </div>
                <br></br>
                <div className="content-row user-review">
                   {review.reviewText}
                </div>
              </div>    
            </div>
            
          </div>
        ))}
        <div className="column icon-column" onClick={handleNextClick}>
          <img src={MoveNext} alt="Icon 2" className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Section6;
