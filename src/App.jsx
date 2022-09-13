import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import { AppContainer } from './styles/reset';

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Routes>
        <Route />
        <Route />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
