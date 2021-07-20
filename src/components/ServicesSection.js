import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
// styles
import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage } from "../styles";

const ServicesSection = () => {
  return (
    <StyledServices>
      <StyledServicesDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Loren ipsun blabla bla</p>
          </ StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Team work</h3>
            </div>
            <p>Loren ipsun blabla bla</p>
          </ StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Loren ipsun blabla bla</p>
          </ StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Loren ipsun blabla bla</p>
          </ StyledCard>
        </StyledCards>
      </ StyledServicesDescription>
      <StyledImage>
        <img src={home2} alt="camera" />
      </ StyledImage>
    </ StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  background: #78D3FA;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledServicesDescription = styled(StyledDescription)`
  span {
    color: black;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  flex: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  p {
    color: #363636;
  }
`;

export default ServicesSection;
