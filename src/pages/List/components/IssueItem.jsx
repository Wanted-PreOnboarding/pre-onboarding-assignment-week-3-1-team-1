import React from 'react';
import styled from 'styled-components';

import { getSimpleDatePattern } from '../../../util/transferDate';
import { Color } from '../../../styles/common';

function IssueItem({ number, title, comments, user, created_at, goToDetailPage }) {
  return (
    <Container>
      <LeftWrapper>
        <Title onClick={() => goToDetailPage(number)}>
          <H1>
            <span>#{number}&nbsp;</span>
          </H1>
          <H1>{title}</H1>
        </Title>
        <Description>
          <P>작성자 : {user},&nbsp;</P>
          <P>작성일 : {getSimpleDatePattern(created_at)}</P>
        </Description>
      </LeftWrapper>
      <RightWrapper>
        <Comment>
          <H1>코멘트 : {comments}</H1>
        </Comment>
      </RightWrapper>
    </Container>
  );
}

export default IssueItem;

const Container = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 15px;
  display: flex;

  min-width: 0;

  justify-content: space-between;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  padding: 20px;
`;

const Title = styled.div`
  display: flex;
  cursor: pointer;

  &:hover {
    color: ${Color.BLUE100};
  }
`;

const Description = styled.div`
  display: flex;
`;

const Comment = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const H1 = styled.h1`
  font-size: 1.2rem;
  line-height: 0;
`;

const P = styled.p`
  font-size: 0.8rem;
`;
