import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ShowApiDataCompo from './ShowApiDataCompo';
import ShowApiDetailCompo from './ShowApiDetailCompo';
import { AppContainer } from './styles/reset';

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Routes>
        {/* api데이터가 어떻게 나오는지 확인하기 위해 임시적으로 만들었습니다. 개발하면서 지우셔도 상관없습니다. */}
        <Route path="/details" element={<ShowApiDetailCompo />} />
        <Route path="/" element={<ShowApiDataCompo />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
