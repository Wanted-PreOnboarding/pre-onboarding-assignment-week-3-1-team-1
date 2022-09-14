import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import ApiModel from '../../api';
import { useIssuesState, useIssuesDispatch } from '../../context/IssueContext';
import { useErrorHandler } from '../../components/ErrorBoundary';
import IssueDetailCard from './components/IssueDetailCard';

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
      <IssueDetailCard />
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

const DetailContainer = styled.article``;
