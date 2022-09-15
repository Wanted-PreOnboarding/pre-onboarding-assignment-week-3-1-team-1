import React from 'react';
import { Route, Routes } from 'react-router';

import { AppContainer } from './styles/reset';
import { IssuesProvider } from './context/IssueContext';

import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Fallback from './components/Fallback';

import IssueDetail from './pages/IssueDetail/IssueDetail';
import List from './pages/List/List';

function App() {
  return (
    <AppContainer className="App">
      <IssuesProvider>
        <Header />
        <ErrorBoundary FallbackComponent={Fallback}>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/:number" element={<IssueDetail />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </IssuesProvider>
    </AppContainer>
  );
}

export default App;
