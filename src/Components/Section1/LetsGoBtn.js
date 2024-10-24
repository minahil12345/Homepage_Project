import React from 'react';
import Arrow from '../../ArrowLetsGo.svg';
import './LetsGoBtn.css';

const LetsGoBtn = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="transparent-button">
      <span className="transparent-button-text">
        Let's Go!
        <img src={Arrow} alt="Arrow" className="arrow-icon" />
      </span>
    </button>
  );
};

export default LetsGoBtn;   
