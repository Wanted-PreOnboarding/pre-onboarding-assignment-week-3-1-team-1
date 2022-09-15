import React from 'react';
import styled from 'styled-components';

function Fallback() {
  return (
    <Container>
      <h2>문제가 발생했습니다</h2>
    </Container>
  );
}

export default Fallback;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
