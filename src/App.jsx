import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import ShowApiDataCompo from './ShowApiDataCompo';
import ShowApiDetailCompo from './ShowApiDetailCompo';

function App() {
  return (
    <Routes>
      {/* api데이터가 어떻게 나오는지 확인하기 위해 임시적으로 만들었습니다. 개발하면서 지우셔도 상관없습니다. */}
      <Route path="/details" element={<ShowApiDetailCompo />} />
      <Route path="/" element={<ShowApiDataCompo />} />
    </Routes>
  );
}

export default App;
