import React from 'react';
import { Route, Routes } from 'react-router';

import './App.css';
import { AppContainer } from './styles/reset';
import { IssuesProvider } from './context/IssueContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ShowApiDataCompo from './ShowApiDataCompo';
import ErrorBoundary from './components/ErrorBoundary';
import Fallback from './components/Fallback';
import IssueDetail from './pages/IssueDetail/IssueDetail';

function App() {
  return (
    <AppContainer className="App">
      <IssuesProvider>
        <Header />
        <ErrorBoundary fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<ShowApiDataCompo />} />
            <Route path="/:number" element={<IssueDetail />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </IssuesProvider>
    </AppContainer>
  );
}

export default App;
