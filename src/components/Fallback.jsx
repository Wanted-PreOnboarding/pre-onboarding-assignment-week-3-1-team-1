import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';

function Fallback({ error }) {
  const { message } = error;
  return (
    <Container>
      <h2>문제가 발생했습니다</h2>
      <pre>
        <span>오류 메세지</span>
        <br />
        {message}
      </pre>
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
  & pre {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 1rem;
    border-radius: 0.2rem;
  }
  & > pre > span {
    font-weight: bold;
  }
  & a {
    text-decoration: none;
  }
`;

Fallback.propTyes = {
  error: PropType.object,
};
