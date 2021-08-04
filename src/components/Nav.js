import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arcoLogo from "../img/arcologo.png";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/">
          <img id="logo" src={arcoLogo} alt="arco logo" />
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            About us
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/what-we-do">
            What we do
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/clients">
            Our Clients
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact us
          </Link>
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
  }
  .nav-link {
    color: black;
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
export default Nav;
