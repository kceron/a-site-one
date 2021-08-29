import React, { forwardRef, useRef } from 'react'
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
  // const contactUsRef = useRef();
  // console.log("CONTACT US REF", contactUsRef)

  return (
    <StyledContact
      id="contact-us"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "rgb(225 224 225)" }}
    >
      <StyledTitle>
        <Hide>
          <motion.h2 variants={titleAnim} style={{marginLeft: "20px"}}>What can we build for you?</motion.h2>
          <motion.h2 variants={titleAnim} style={{marginLeft: "20px"}}>Get in touch</motion.h2>
        </Hide>
      </StyledTitle>
      <div>
        <FormContainer>
          <form onSubmit={""}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              htmlFor="name"
              id="full-name"
              onChange={""}
            />

            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              htmlFor="email"
              id="email"
              onChange={""}
            ></input>

            <label htmlFor="message">Message: </label>
            <textarea
              name="message"
              htmlFor="message"
              id="message"
              onChange={""}
            />

            <div className="">
              <input type="submit" value="Send"></input>
            </div>
          </form>
        </FormContainer>
        <Hide className="bottom">
          <StyledSocialWrap style={{marginLeft: "20px"}}>
            <StyledSocial>
              <a
                href="https://www.linkedin.com/company/arco-data-design/about/"
                className="icon"
              >
                <span>
                  <FontAwesomeIcon size="2x" icon={faLinkedin} />
                </span>
              </a>
            </StyledSocial>
            <StyledSocial>
              <a href="https://twitter.com/..." className="icon">
                <span>
                  <FontAwesomeIcon size="2x" icon={faTwitterSquare} />
                </span>
              </a>
            </StyledSocial>

            <StyledSocial>
              <a
                href="https://www.linkedin.com/company/arco-data-design/about/"
                className="icon"
              >
                <span>
                  <FontAwesomeIcon size="2x" icon={faEnvelope} />
                </span>
              </a>
            </StyledSocial>
          </StyledSocialWrap>
        </Hide>
      </div>
      <ScrollTop />
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  /* color: #adadad; */
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

const StyledSocialWrap = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const StyledSocial = styled(motion.div)`
  flex-basis: 5rem;
  /* margin-left: 2rem; */
  .icon {
    display: flex;
    align-items: center;
  }
  a {
    margin: 2rem;
    text-decoration: none;
  }
  span {
    color: #5b2688;
  }
`;

const FormContainer = styled.div`
  width: 600px;
  margin: 0 auto 2rem;
  padding: 1.75rem;
  border: 1px solid var(--gray);
  border-radius: 0.25rem;
  /* margin-top: 50px; */
  form {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }
  form label {
    margin-top: 5px;
    margin-bottom: 3px;
    font-size: 18px;
    color: #1b1b1b;
  }
  form input,
  form textarea {
    margin-top: 0.25rem;
    margin-bottom: 1rem;
    padding: 0.7rem;
    transition: all 0.3s;
    border-radius: 20px;
    border: 1px solid var(--gray);
  }
  form input[type="submit"] {
    margin: 1.5rem 0 1rem;
    width: 150px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    background-color: #5b2688;
    border-radius: 10px;
  }
  form textarea {
    resize: none;
  }
  form input:focus {
    outline: none;
    background-color: #ddd2dc;
  }
  form textarea:focus {
    outline: none;
    background-color: #ddd2dc;
  }
`;

export default ContactUs;
