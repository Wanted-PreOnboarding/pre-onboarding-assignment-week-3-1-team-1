import React from 'react';
import ApiModel from './api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useIssuesState, useIssuesDispatch } from './context/IssueContext';
// import {useErrorHandler} from './components/ErrorBoundary'

// !!!
// api 연결 확인 되었는지 보는 컴포넌트입니다.
// 이슈목록 화면입니다.
// 프로젝트 제출 전에 해당 컴포넌트는 삭제하겠습니다.
const ShowApiDataCompo = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const [isFetching, setFetching] = useState(false);
  // const handleError = useErrorHandler();

  async function getApi(page) {
    const fetchData = await ApiModel.getList(dispatch, page);
    console.info(fetchData);
    setList(list.concat(fetchData));
    setPage(page + 1);
    setFetching(false);
  }

  useEffect(() => {
    getApi(page);
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop >= offsetHeight) {
        setFetching(true);
      }
    };
    setFetching(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isFetching) getApi(page);
    else setFetching(false);
  }, [isFetching]);

  const { data, error, loading } = state.issues;

  const goToDetailPage = e => {
    const num = e.target.value;
    navigate('/detail', { state: { num } });
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  //에러 핸들링 대안입니다. 위에 주석처리된 handleError와 import 구문의 추석을 해제하고 시도해 보세요.
  // if (error) return handleError(error);
  if (!data) return null; //여기 커스텀해서 무한 스크롤 구현해주시면 됩니다.

  return (
    <Box className="example-box">
      <h1>리스트</h1>
      {list?.map(data => (
        <div key={data.id}>
          <div>
            <b>title:</b>
            {data.title}
          </div>
          <div>
            <b>comments:</b>
            {data.comments}
          </div>
          <div>
            <b>body:</b>
            {data.body}
          </div>
          <div>
            <b>url:</b>
            {data.url}
          </div>
          <div>
            <b>created_at:</b>
            {data.created_at}
          </div>
          <button onClick={goToDetailPage} value={data.number}>
            상세보기
          </button>
        </div>
      ))}
      {isFetching && <h1>로딩중...</h1>}
    </Box>
  );
};

export default ShowApiDataCompo;

const Box = styled.div`
  border: 3px solid tomato;

  & > div {
    border: 2px solid yellowgreen;
  }
`;
