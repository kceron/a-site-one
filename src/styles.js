import styled from "styled-components";
import { motion } from "framer-motion";

// styled components
export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1000px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
  button:hover {
    background: rgb(137, 57, 206);
  }
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  button {
    margin-top: 2rem;
  }
  @media (max-width: 1100px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const StyledImage = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
