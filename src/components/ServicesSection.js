import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.jpg";
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
              <h3>Custom CRM software</h3>
            </div>
            <p>....</p>
          </ StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Enterprise Database Development</h3>
            </div>
            <p>....</p>
          </ StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Backend Website Development</h3>
            </div>
            <p>....</p>
          </ StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Frontend Website Development</h3>
            </div>
            <p>...</p>
          </ StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Data Analysis</h3>
            </div>
            <p>...</p>
          </ StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Web Scraping</h3>
            </div>
            <p>...</p>
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
  background: #1B1B1B;
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
    color: #8F69AD;
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
