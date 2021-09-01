import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arcoLogo from "../img/arcologo.png";
import { motion } from "framer-motion";
import { useLocation } from "react-router";

const Nav = () => {
  const { pathname } = useLocation();
  const scrollUp = () => {
    const section = document.querySelector("#about-us");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleClick = () => {
    const section = document.querySelector("#contact-us");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <StyledNav>
      <h1>
        <img id="logo" onClick={scrollUp} src={arcoLogo} alt="arco logo" />
      </h1>
      <ul>
        <li>
          <Link className={pathname === "/" ? "selected" + " " + "nav-link" : "nav-link"} to="/">
            About us
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link className={pathname === "/what-we-do" ? "selected" + " " + "nav-link" : "nav-link"} to="/what-we-do">
            What we do
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/what-we-do" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link className={pathname === "/clients" ? "selected" + " " + "nav-link" : "nav-link"} to="/clients">
            Our Clients
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/clients" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link
            onClick={() => {
              pathname === "/" && handleClick();
            }}
            className="nav-link"
            to="/"
          >
            Contact us
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    width: 110px;
    height: auto;
  }
  li {
    padding-left: 8rem;
    position: relative;
    transition: 0.2s ease;
  }
  .nav-link {
    color: rgb(186, 185, 193);
  }
  .nav-link:hover {
    color: black;
  }
  .selected {
    color: black;
  }
  li:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #8f69ad;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 55%;
  @media (max-width: 1300px) {
    left: 0%;
    min-width: 5rem;
  }
`;

export default Nav;
