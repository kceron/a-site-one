import React from "react";
import home1 from '../img/home1.jpg';

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2 className="">We have fun making</h2>
          </div>
          <div className="hide">
            <h2 className="">
              our <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2 className="">true.</h2>
          </div>
        </div>
        <p>
          Contact us for any videography ideas that you have. We are
          professionals.
        </p>
        <button>Hit us up</button>
      </div>
      <div className="image">
        <img style={{width: "50%"}} src={home1} alt="guy with a cam" />
      </div>
    </div>
  );
};

export default AboutSection;
