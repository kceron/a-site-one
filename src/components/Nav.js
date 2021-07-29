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
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    width: 100px;
    height: auto;
  }
  li {
    padding-left: 8rem;
    position: relative;
  }
  .nav-link {
    color: black;
  }
`;
export default Nav;
