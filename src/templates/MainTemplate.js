import React from 'react';
import GlobalStyle from '../globalStyles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/mainTheme';
import Navbar from '../components/organisms/navigations/Navbar';
import Footer from '../components/organisms/navigations/Footer';
import Cart from '../components/organisms/Cart';

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Navbar />
        <Cart />
        {/* To co ma widok */}
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
