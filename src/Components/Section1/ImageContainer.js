import React from 'react';
import OuterEclipse from '../../Rectangle 6.svg';
import InnerEclipse from '../../Rectangle 7.svg';
import InnerInnerEclipse from '../../BackgroundImage.svg';
import Picture from '../../Section1Pic.svg';
import './ImageContainer.css';

const ImageContainer = () => {
  return (
    <div className="red-row">
      <img src={OuterEclipse} alt="Rectangle1" className="OuterEclipse" />
      <img src={InnerEclipse} alt="Rectangle2" className="InnerEclipse" />
      <img src={InnerInnerEclipse} alt="Rectangle3" className="InnerInnerEclipse" />
      <img src={Picture} alt="A hand with butterfly" className="Image" />
    </div>
  );
};

export default ImageContainer;
