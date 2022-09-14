import React, { useEffect } from 'react';
import ApiModel from '../../api';
import { useParams } from 'react-router-dom';
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

  return <div>{data.title}</div>;
};

export default IssueDetail;
