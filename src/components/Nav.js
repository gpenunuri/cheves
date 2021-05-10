import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import logo from '../assets/images/Logo.png';

const NavStyles = styled.nav`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    img {
      max-width: 80px;
      margin-bottom: 1rem;
    }
    span {
      font-size: 18px;
      color: #333;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <Link to="/" className="logo-link">
        <img src={logo} alt="Cheves Peñapuri Logo" />
        <span>Cheves Peniapuri</span>
      </Link>
    </NavStyles>
  );
}
