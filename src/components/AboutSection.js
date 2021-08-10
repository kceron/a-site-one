import React from "react";
import home1 from "../img/home1.jpg";
// import arcologo from "../img/arcologo.png";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>Custom</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              <span>Software</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>solutions</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.button variants={fade}>Contact us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={home1} alt="arco logo" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
