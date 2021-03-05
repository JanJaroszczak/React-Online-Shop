import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '../globalStyles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/mainTheme';

const MainTemplate = ({ children }) => {
  return (
    <BrowserRouter>
      <>
        <GlobalStyle />
        <ThemeProvider theme={mainTheme}>
          {/* Navbar */}
          {/* To co ma widok */}
          {children}
          {/* Footer */}
        </ThemeProvider>
      </>
    </BrowserRouter>
  );
};

export default MainTemplate;
