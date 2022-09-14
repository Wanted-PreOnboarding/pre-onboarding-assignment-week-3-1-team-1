import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useIssuesState } from './context/IssueContext';
import useInfinityScroll from './hook/useInfinityScroll';

// !!!
// api 연결 확인 되었는지 보는 컴포넌트입니다.
// 이슈목록 화면입니다.
// 프로젝트 제출 전에 해당 컴포넌트는 삭제하겠습니다.
const ShowApiDataCompo = () => {
  const navigate = useNavigate();
  const { list, isFetching } = useInfinityScroll();
  const state = useIssuesState();
  const { data, error, loading } = state.issues;

  const goToDetailPage = e => {
    const num = e.target.value;
    navigate('/detail', { state: { num } });
  };

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  //에러 핸들링 대안입니다. 위에 주석처리된 handleError와 import 구문의 추석을 해제하고 시도해 보세요.
  // if (error) return handleError(error);
  if (!data) return null;
  //여기 커스텀해서 무한 스크롤 구현해주시면 됩니다.
  //해당 분기로 무한 스크롤을 어떻게 구현할지 감이 안와서 일단 다른 방식으로 무한 스크롤 구현 해봤습니다...

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
