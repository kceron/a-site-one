import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import tunesat from "../img/tunesat-logo.png";
import freeplay from "../img/freeplay-logo.jpg";
import lawlogo from "../img/law-logo.jpg";
// Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
// import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  // const [element, controls] = useScroll();
  // const [element2, controls2] = useScroll();

  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <StyledClient>
        <motion.h2 variants={fade}>Tunesat</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/tunesat">
          <StyledHide>
            <motion.img
              className="client__logo"
              variants={photoAnim}
              src={tunesat}
              alt="Tunesat Logo"
            />
          </StyledHide>
        </Link>
      </StyledClient>
      <StyledClient
      // ref={element}
      // variants={fade}
      // animate={controls}
      // initial="hidden"
      >
        <h2>Freeplay</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/freeplay">
          <motion.img variants={photoAnim} src={freeplay} alt="Client Logo" />
        </Link>
      </StyledClient>
      <StyledClient
      // ref={element2}
      // variants={fade}
      // animate={controls2}
      // initial="hidden"
      >
        <h2>Kuhn Law Group</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/kuhn-law-group">
          <motion.img variants={photoAnim} src={lawlogo} alt="Client Logo" />
        </Link>
      </StyledClient>
      <ScrollTop />
    </StyledWork>
  );
};
// to combine styled components with motion we just pass motion as an arg when calling styled
const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: #dddddd;
  h2 {
    padding: 1rem 0rem;
  }
`;
const StyledClient = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #8f69ad;
    margin-bottom: 3rem;
  }
  img {
    width: 200px;
    height: auto;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 10vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
