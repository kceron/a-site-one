import React from "react";
import home1 from "../img/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";


const AboutSection = () => {

  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div
          // variants={container}
          // initial="hidden"
          // animate="show"
          // className="title"
        >
          <StyledHide>
            <motion.h2
            variants={titleAnim}
            // initial="hidden"
            // animate="show"
            >
              We have fun making
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2
            variants={titleAnim}
            >
              our <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2
            variants={titleAnim}
            >
              true
            </motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any videography ideas that you have. We are
          professionals.
        </motion.p>
        <motion.button variants={fade}>Hit us up</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={home1} alt="guy with a cam" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
