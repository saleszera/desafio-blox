import React from 'react';

import GlobalStyle from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
};

export default App;
