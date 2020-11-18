import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import AppProvider from './context/index';
import Routes from './routes/index'
import GlobalStyle from './shared/style/global'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Header />
          <SideMenu />
          <Routes />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;