import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppProvider from './context/index';
import Routes from './routes/index'
import GlobalStyle from './shared/style/global'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;