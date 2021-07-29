import React, { useState } from "react";
import styled from "styled-components";
import { StyledAbout } from "../styles";
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <Toggle title="How do I start?">
        <div className="question">
          <div className="answer">
            <p>Lorem ..... .....</p>
            <p>Lorem lala..... .....</p>
          </div>
        </div>
      </Toggle>
      <Toggle title="Daily Schedule">
        <div className="question">
          <div className="answer">
            <p>Lorem ..... .....</p>
            <p>Lorem lolo..... .....</p>
          </div>
        </div>
      </Toggle>
      <Toggle title="Payment Methods">
        <div className="question">
          <div className="answer">
            <p>Lorem ..... .....</p>
            <p>Lorem lele..... .....</p>
          </div>
        </div>
      </Toggle>
      <Toggle title="What products do you offer?">
        <div className="question">
          <div className="answer">
            <p>Lorem ..... .....</p>
            <p>Lorem lulu..... .....</p>
          </div>
        </div>
      </Toggle>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
