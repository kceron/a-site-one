import React from "react";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  // const [element, controls] = useScroll();

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
          <motion.h2 variants={titleAnim}>What can we build for you?</motion.h2>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </StyledTitle>
      <div>
        <Hide>
          <form onSubmit={""}>
            <div className=""></div>
            <div className="">
              <input
                type="text"
                name="name"
                htmlFor="name"
                placeholder="Name"
                id="full-name"
                onChange={""}
              />
            </div>
            <div className="">
              <input
                type="email"
                name="email"
                htmlFor="email"
                placeholder="Email"
                id="email"
                onChange={""}
              ></input>
            </div>
            <div className="">
              <textarea
                name="message"
                htmlFor="message"
                id="message"
                placeholder="Message"
                onChange={""}
              />
            </div>

            <div className="">
              <input type="submit" value="Send"></input>
            </div>
          </form>
        </Hide>
        <Hide className="bottom">
          <ul className="icons">
            <StyledSocial>
              <a
                href="https://www.linkedin.com/company/arco-data-design/about/"
                className="icon"
              >
                <span>
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
              </a>
            </StyledSocial>
            <StyledSocial>
              <a href="https://twitter.com/..." className="icon">
                <span>
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </span>
              </a>
            </StyledSocial>

            <StyledSocial>
              <a
                href="https://www.linkedin.com/company/arco-data-design/about/"
                className="icon"
              >
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </a>
            </StyledSocial>
          </ul>
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

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2,
  a {
    margin: 2rem;
    text-decoration: none;
  }
  span {
    color: #5B2688;
  }
`;

export default ContactUs;
