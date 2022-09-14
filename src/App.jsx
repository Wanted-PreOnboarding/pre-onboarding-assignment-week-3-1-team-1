import React from 'react';
import { Route, Routes } from 'react-router';

import './App.css';
import { AppContainer } from './styles/reset';
import { IssuesProvider } from './context/IssueContext';
import Header from './components/Header';
import Footer from './components/Footer';
// import ShowApiDataCompo from './ShowApiDataCompo';
import ShowApiDetailCompo from './ShowApiDetailCompo';
import ErrorBoundary from './components/ErrorBoundary';
import Fallback from './components/Fallback';

import List from './pages/List/List';

function App() {
  return (
    <AppContainer className="App">
      <IssuesProvider>
        <Header />
        <ErrorBoundary fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/detail" element={<ShowApiDetailCompo />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </IssuesProvider>
    </AppContainer>
  );
}

export default App;
