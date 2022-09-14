import styled from 'styled-components';

export const AppContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  * {
    box-sizing: border-box;
  }

  /* 태블릿 사이즈 이하 반응형 */
  @media screen and (max-width: 991px) {
    min-width: 480px;
  }
`;
