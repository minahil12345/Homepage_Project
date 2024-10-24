import React from 'react';
import OuterCircle from '../../Ellipse 11.svg';
import InnerCircle from '../../Ellipse 12.svg';
import CircleText from '../../Group 6.svg';
import ArrowCircle from '../../Vector.svg';
import './Stamp.css';

const Stamp = () => {
  return (
    <div className="symbol-container">
      <img src={OuterCircle} alt="Symbol1" className="symbol1" />
      <img src={InnerCircle} alt="Symbol2" className="symbol2" />
      <img src={CircleText} alt="Symbol3" className="symbol3" />
      <img src={ArrowCircle} alt="Symbol4" className="symbol4" />
    </div>
  );
};

export default Stamp;
