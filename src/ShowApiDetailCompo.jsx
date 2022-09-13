import React from 'react';
import ApiModel from './api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// api 연결 확인 되었는지 보는 컴포넌트입니다.
// 이슈 상세 화면입니다.
// 프로젝트 제출 전에 해당 컴포넌트는 삭제하겠습니다.
const ShowApiDetailCompo = () => {
  const { state } = useLocation();
  const { num } = state;
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getApi(num) {
      const data = await ApiModel.getItem(num);
      console.info(data);
      setData(data);
    }
    getApi(num);
  }, []);
  return <div>{data?.title}</div>;
};

export default ShowApiDetailCompo;
