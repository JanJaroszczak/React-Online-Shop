import React from 'react';
import GlobalStyle from '../globalStyles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/mainTheme';
import Navbar from '../components/organisms/navigations/Navbar';
import Footer from '../components/organisms/navigations/Footer';
import CartModal from '../components/organisms/CartModal';

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Navbar />
        <CartModal />
        {/* To co ma widok */}
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
