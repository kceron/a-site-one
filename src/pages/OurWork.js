import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
  return (
    <StyledWork>
      <StyledClient>
        <h2>Tunesat</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="Client Logo" />
        </Link>
      </StyledClient>
      <StyledClient>
        <h2>Freeplay</h2>
        <div className="line"></div>
        <Link>
          <img src={theracer} alt="Client Logo" />
        </Link>
      </StyledClient>
      <StyledClient>
        <h2>Kuhn Law Group</h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="Client Logo" />
        </Link>
      </StyledClient>
    </StyledWork>
  );
};

const StyledWork = styled.div`
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
