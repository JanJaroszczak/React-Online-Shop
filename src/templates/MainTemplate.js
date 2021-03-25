import React from 'react';
import GlobalStyle from '../globalStyles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/mainTheme';
import styled from 'styled-components';
import Navbar from '../components/organisms/navigations/Navbar';
import Footer from '../components/organisms/navigations/Footer';
import CartModal from '../components/organisms/CartModal';

const StyledWrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 70px;
  margin-bottom: -70px;
`;

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <StyledWrapper>
          <Navbar />
          <CartModal />
          {/* To co ma widok */}
          {children}
        </StyledWrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
