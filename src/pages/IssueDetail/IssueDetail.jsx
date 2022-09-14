import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import { TbMessages } from 'react-icons/tb';

import ApiModel from '../../api';
import { useIssuesState, useIssuesDispatch } from '../../context/IssueContext';
import { useErrorHandler } from '../../components/ErrorBoundary';

const IssueDetail = () => {
  const { number } = useParams();

  const state = useIssuesState();
  const dispatch = useIssuesDispatch();

  const handleError = useErrorHandler();

  useEffect(() => {
    async function getDetail() {
      const detailItem = await ApiModel.getItem(dispatch, number);
      console.info(detailItem);
    }

    getDetail();
  }, []);

  const { data, error, loading } = state.issueDetail;

  if (loading) return <div>로딩중..</div>;
  if (error) return handleError(error);
  if (!data) return <div>데이터없음</div>;

  return (
    <Container>
      <IssueDetailCard>
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
      </IssueDetailCard>
      <hr />
      <DetailContainer></DetailContainer>
    </Container>
  );
};

export default IssueDetail;

const Container = styled.section`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const IssueDetailCard = styled.header`
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

const DetailContainer = styled.article``;
