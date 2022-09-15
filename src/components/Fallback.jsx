import React from 'react';
import styled from 'styled-components';

function Fallback() {
  return (
    <Container>
      <h2>문제가 발생했습니다</h2>
      <a href="https://github.com/wanted-fe-6/wanted-pre-onboarding-fe-6-3-1/issues">
        저희에게 문제를 알려주세요
      </a>
    </Container>
  );
}

export default Fallback;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & a {
    text-decoration: none;
  }
`;
