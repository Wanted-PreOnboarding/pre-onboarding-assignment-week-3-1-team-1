import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import ShowApiDataCompo from './ShowApiDataCompo';
import ShowApiDetailCompo from './ShowApiDetailCompo';

function App() {
  return (
    <Routes>
      <Route path="/details" element={<ShowApiDetailCompo />} />
      <Route path="/" element={<ShowApiDataCompo />} />
    </Routes>
  );
}

export default App;
