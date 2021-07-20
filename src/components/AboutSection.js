import React from "react";
import home1 from "../img/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2 className="">We have fun making</h2>
          </StyledHide>
          <StyledHide>
            <h2 className="">
              our <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2 className="">true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any videography ideas that you have. We are
          professionals.
        </p>
        <button>Hit us up</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with a cam" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
