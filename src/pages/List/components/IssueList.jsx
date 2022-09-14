import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import IssueItem from './IssueItem';
import Ad from './Ad';

import { useIssuesState } from '../../../context/IssueContext';
import useInfinityScroll from '../../../hook/useInfinityScroll';

function IssueList() {
  const navigate = useNavigate();
  const state = useIssuesState();
  const { list, isFetching } = useInfinityScroll();
  const { error, loading } = state.issues;

  const goToDetailPage = e => {
    const num = e.target.value;
    navigate('/detail', { state: { num } });
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <Container>
      {list?.map((data, idx) => {
        return (
          <Fragment key={data.id}>
            <IssueItem
              number={data.number}
              title={data.title}
              comments={data.comments}
              user={data.user.login}
              created_at={data.created_at}
              goToDetailPage={goToDetailPage}
            />
            {idx === 3 && <Ad />}
          </Fragment>
        );
      })}
      {isFetching && <h1>로딩중...</h1>}
    </Container>
  );
}

export default IssueList;

const Container = styled.section`
  width: 1080px;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    width: 100%;

    padding-left: 20px;
    padding-right: 20px;
  }
`;
