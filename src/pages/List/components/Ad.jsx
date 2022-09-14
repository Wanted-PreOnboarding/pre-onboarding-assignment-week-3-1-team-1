import React from 'react';
import styled from 'styled-components';

function Ad() {
  return (
    <ImageWrapper>
      <AdLink href="https://thingsflow.com/ko/home">
        <img src="/images/logo.png" alt="ad" width={'100px'} height={'100px'} />
      </AdLink>
    </ImageWrapper>
  );
}

export default Ad;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AdLink = styled.a`
  cursor: pointer;
`;
