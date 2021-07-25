import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const OurWork = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledClient>
        <h2>Tunesat</h2>
        <div className="line"></div>
        <Link to="/work/tunesat">
          <img src={athlete} alt="Client Logo" />
        </Link>
      </StyledClient>
      <StyledClient>
        <h2>Freeplay</h2>
        <div className="line"></div>
        <Link to="/work/freeplay">
          <img src={theracer} alt="Client Logo" />
        </Link>
      </StyledClient>
      <StyledClient>
        <h2>Kuhn Law Group</h2>
        <div className="line"></div>
        <Link to="/work/kuhn-law-group">
          <img src={goodtimes} alt="Client Logo" />
        </Link>
      </StyledClient>
    </StyledWork>
  );
};
// to combine styled components with motion we just pass motion as an arg when calling styled
const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: white;
  h2 {
    padding: 1rem 0rem;
  }
`;
const StyledClient = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
