import React from 'react';
import { Route, Routes } from 'react-router';

import './App.css';
import { AppContainer } from './styles/reset';

import Header from './components/Header';
import Footer from './components/Footer';
import ShowApiDataCompo from './ShowApiDataCompo';
import ShowApiDetailCompo from './ShowApiDetailCompo';
import ErrorBoundary from './components/ErrorBoundary';
import Fallback from './components/Fallback';

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <ErrorBoundary Fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<ShowApiDataCompo />} />
          <Route path="/detail" element={<ShowApiDetailCompo />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </AppContainer>
  );
}

export default App;
