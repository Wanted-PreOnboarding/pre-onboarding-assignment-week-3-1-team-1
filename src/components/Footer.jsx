import React from 'react';
import styled from 'styled-components';

import { Color } from '../styles/common.js';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <img src="/images/logo.png" alt="footer_logo" />
        <div>
          <p>
            <span>대표</span> 이수지 | <span>사업자 등록번호</span> 000-0000
          </p>
          <p>
            <span>주소</span> 서울 성동구 성수이로20길 51
          </p>
          <p>공지사항 개인정보 보호 정책</p>
          <p>&copy; thingsflow Inc. 2022.</p>
        </div>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${Color.GRAY200};
`;

const FooterContent = styled.div`
  width: 980px; /* inner width */
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;

  /* footer의 logo */
  img {
    width: 80px; /* header logo 통일 */
  }

  /* footer의 text */
  div {
    text-align: left;
    p {
      color: ${Color.GRAY100};
      font-size: 16px;

      span {
        font-weight: 700;
      }
    }
  }

  /* 태블릿 사이즈 이하 반응형 */
  @media screen and (max-width: 991px) {
    width: 100%;
    gap: 10%;

    div {
      p {
        font-size: 14px;
      }
    }
  }
`;
