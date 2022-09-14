import React from 'react';

import styled from 'styled-components';
import { TbMessages } from 'react-icons/tb';

import { useIssuesState } from '../../../context/IssueContext';
import { getSimpleDatePattern } from '../../../util/transferDate';

const IssueDetailCard = () => {
  const state = useIssuesState();

  const { data } = state.issueDetail;

  return (
    <header>
      <IssueDetail>
        <Avatar>
          <AvatarImg src={data.user.avatar_url} alt="이슈를 생성한 사람 아바타"></AvatarImg>
        </Avatar>
        <IssueInfo>
          <IssueInfoMain>
            <IssueInfoTitle>
              <span>#{data.number}</span> {data.title}
            </IssueInfoTitle>
            <IssueInfoUser>
              작성자 : {data.user.login} / 작성일 : {getSimpleDatePattern(data.created_at)}
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

const Avatar = styled.div`
  width: 50px;
`;
const AvatarImg = styled.img`
  width: 100%;
  border-radius: 50%;
  heigth: auto;
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
  font-weight: 700;
  @media screen and (max-width: 600px) {
    font-size: 3.5vw;
  }

  span {
    opacity: 0.7;
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
