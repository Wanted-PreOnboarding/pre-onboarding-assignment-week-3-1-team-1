import React from 'react';
import ApiModel from './api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
