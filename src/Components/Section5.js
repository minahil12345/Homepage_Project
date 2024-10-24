import React, { useRef } from 'react';
import './Section5.css';
import background from '../Background4.svg';
import ThunderIcon from '../ThunderSymbol.svg';
import Video from '../Video.mp4';

const Section5 = () => {
  const videoRef = useRef(null);

//   const handleVideoPlay = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

  return (
    <section className="section5">
      <div className="row-container">
        <div className="left-column-5">
          <img src={background} alt="vectors in background" className="background-vectors" />
          <div className="text-row">
            <span className="project-text">Project </span>
            <span className="sc-text">SC 01</span>
          </div>
          <br></br>
          <div className="description-row">
            <span className="description-text">
               A sample of our abilities for you to watch, but feel free to contact us for more in-depth information or special implementations.
            </span>
          </div>
        </div>
        <div className="right-column-5">
          <div className="outer-frame">
            <div className="inner-frame">
              <div className="video-container">
                <video ref={videoRef} className="video" controls>
                  <source src={Video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <img src={ThunderIcon} alt="Thunder Symbol"  className="thunder-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
