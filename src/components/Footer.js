import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  padding: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  p {
    font-size: 14px;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p className="center">
        &copy; Cheves Peniapuri S.A. de C.V. {new Date().getFullYear()}
      </p>
    </FooterStyles>
  );
}
