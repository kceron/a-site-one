import React from "react";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#DDDDDD" }}
    >
      <StyledTitle>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </StyledTitle>
      <div>
        <Hide>
          <StyledSocial variants={titleAnim}>
            <Circle />
            <a href="">LinkedIn</a>
          </StyledSocial>
        </Hide>
        <Hide>
          <StyledSocial variants={titleAnim}>
            <Circle />
            <a href="">Instagram</a>
          </StyledSocial>
        </Hide>
        <Hide>
          <StyledSocial variants={titleAnim}>
            <Circle />
            <a href="">Twitter</a>
          </StyledSocial>
        </Hide>
        <Hide>
          <StyledSocial variants={titleAnim}>
            <Circle />
            <h2>Send us an email</h2>
          </StyledSocial>
        </Hide>
      </div>
      <ScrollTop />
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 2rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #5b2688;
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2,
  a {
    margin: 2rem;
    text-decoration: none;
  }
`;

export default ContactUs;
