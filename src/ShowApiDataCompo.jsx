import React from 'react';
import ApiModel from './api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// api 연결 확인 되었는지 보는 컴포넌트입니다.
// 이슈목록 화면입니다.
// 프로젝트 제출 전에 해당 컴포넌트는 삭제하겠습니다.
const ShowApiDataCompo = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getApi() {
      const data = await ApiModel.getList();
      console.info(data);
      setData(data);
    }

    getApi();
  }, []);

  const goToDetailPage = e => {
    const num = e.target.value;
    navigate('/details', { state: { num } });
  };

  return (
    <Box className="example-box">
      <h1>리스트</h1>
      {data?.map(data => (
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
