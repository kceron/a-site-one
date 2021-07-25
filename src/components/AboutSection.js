import React from "react";
import home1 from "../img/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";
import { motion } from "framer-motion";
import { hidden } from "ansi-colors";

const AboutSection = () => {
  // const titleAnim = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 2 } },
  // };
  // const container = {
  //   hidden: { x: 100 },
  //   show: {
  //     x: 0,
  //     transition: {
  //       duration: 0.75,
  //       ease: "easeOut",
  //       staggerChildren: 0.5,
  //       // when: "beforeChildren",
  //     },
  //   },
  // };

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
            // variants={titleAnim}
            // initial="hidden"
            // animate="show"
            >
              We have fun making
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2
            // variants={titleAnim}
            >
              our <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2
            // variants={titleAnim}
            >
              true
            </motion.h2>
          </StyledHide>
        </motion.div>
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
