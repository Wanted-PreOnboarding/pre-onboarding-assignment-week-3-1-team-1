import React from 'react';
// import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import ShowApiDataCompo from './ShowApiDataCompo';
// import ShowApiDetailCompo from './ShowApiDetailCompo';
import { AppContainer } from './styles/reset';

function App() {
  return (
    <AppContainer className="App">
      <Header />
      
      <Footer />
    </AppContainer>
  );
}

export default App;
