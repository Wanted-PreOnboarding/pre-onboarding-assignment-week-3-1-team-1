import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
      <img src="/images/logo.png" alt="header-logo"></img>
      <ul>
        <li>Organization Name</li>
        <li>Repository Name</li>
      </ul>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 980px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  z-index: 1;

  img {
    width: 80px;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 20px;

    li {
      list-style: none;
    }
  }
`;
