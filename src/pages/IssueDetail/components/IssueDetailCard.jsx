import React from 'react';

import styled from 'styled-components';
import { TbMessages } from 'react-icons/tb';

import { useIssuesState } from '../../../context/IssueContext';

const IssueDetailCard = () => {
  const state = useIssuesState();

  const { data } = state.issueDetail;

  return (
    <header>
      <IssueDetail>
        <AvatarImg src={data.user.avatar_url} alt="이슈를 생성한 사람 아바타"></AvatarImg>
        <IssueInfo>
          <IssueInfoMain>
            <IssueInfoTitle>{data.title}</IssueInfoTitle>
            <IssueInfoUser>
              작성자 : {data.user.login} / 작성일 : {data.created_at.slice(0, 10)}
            </IssueInfoUser>
          </IssueInfoMain>
          <IssueInfoComments>
            <TbMessages size="25px" />
            <div>{data.comments}</div>
          </IssueInfoComments>
        </IssueInfo>
      </IssueDetail>
      <hr />
    </header>
  );
};

export default IssueDetailCard;

const IssueDetail = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 4px;
`;

const AvatarImg = styled.img`
  width: 50px;
  border-radius: 50%;

  @media screen and (min-width: 650px) {
    width: 60px;
  }
`;

const IssueInfo = styled.div`
  width: 100%;
  display: flex;
`;

const IssueInfoMain = styled.div`
  width: 95%;
`;

const IssueInfoTitle = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 20px;
  @media screen and (max-width: 750px) {
    font-size: 2.5vw;
  }
`;

const IssueInfoUser = styled.div`
  font-size: 16px;

  @media screen and (max-width: 750px) {
    font-size: 2vw;
  }
`;

const IssueInfoComments = styled.div`
  width: 5%;
  flex-direction: column;
  div {
    font-size: 0.75rem;
  }
`;
