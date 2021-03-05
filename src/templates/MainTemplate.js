import React from 'react';
import GlobalStyle from '../globalStyles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/mainTheme';

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        {/* Navbar */}
        <h2>Nav</h2>
        {/* To co ma widok */}
        {children}
        {/* Footer */}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
