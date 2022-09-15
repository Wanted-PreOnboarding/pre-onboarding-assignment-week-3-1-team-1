import React from 'react';

import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <Skeleton width="100%" height="90px" />
      <hr />
      <Skeleton width="100%" height="600px" marginTop="8px" />
    </Container>
  );
};

export default Loading;

const Container = styled.section`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const Skeleton = styled.div`
  display: inline-block;
  height: ${props => props.height || '14px'};
  width: ${props => props.width || '80%'};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-bottom: 8px;
  margin-top: ${props => props.marginTop || '0'};
`;
