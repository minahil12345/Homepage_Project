import React from 'react';
import UnderlineSVG from '../../Underline.svg';
import './RightPaneText.css';

const RightPaneText = ({ heading, subheading, description }) => {
  return (
    <div className="text-container">
      <span className="heading">{heading}</span>
      <br />
      <img src={UnderlineSVG} alt="Underline" className="underline-svg" />
      <br />
      <span className="subheading">{subheading}</span>
      <br />
      <span className="description">{description}</span>
    </div>
  );
};

export default RightPaneText;
