import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { Color } from '../styles/common';

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to='/'>
          <img src="/images/logo.png" alt="header-logo"></img>
        </Link>
        <ul>
          <li>Organization / Repository</li>
          <li>
            <AiFillGithub size="24" />
            <a href="https://github.com/angular/angular-cli">
              angular / <span>angular cli</span>
            </a>
          </li>
        </ul>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px 0;
  background-color: #fff;
  border-bottom: 1px solid ${Color.GRAY200};
`;

const HeaderContent = styled.div`
  width: 980px; /* inner width */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  /* header의 logo */
  img {
    width: 80px;
  }

  /* organization명 / repository명 */
  ul {
    padding: 0;

    li {
      list-style: none;

      &:nth-of-type(1) {
        font-weight: 700;
      }

      &:nth-of-type(2) {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        gap: 5px;

        a {
          color: ${Color.BLUE100};
          text-decoration: none;
          font-weight: 500;

          span {
            font-weight: 700;
          }
        }
      }
    }
  }

  /* 태블릿 사이즈 이하 반응형 */
  @media screen and (max-width: 991px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;

    ul {
      padding: 0;
    }
  }
`;
