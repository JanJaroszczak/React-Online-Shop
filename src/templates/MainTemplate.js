import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/mainTheme';
import styled from 'styled-components';

import GlobalStyle from '../globalStyles/GlobalStyles';
import Navbar from '../components/organisms/navigations/Navbar';
import Footer from '../components/organisms/navigations/Footer';
import CartModal from '../components/organisms/CartModal';
import NavbarMobile from '../components/organisms/navigations/NavbarMobile';

const StyledWrapper = styled.div`
  /* position: relative; */
  min-height: 100vh;
  padding-bottom: 110px;
  margin-bottom: -70px;
`;

const MainTemplate = ({ children }) => {
  const isTablet = useMediaQuery({
    query: '(min-width: 769px)',
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <StyledWrapper>
          {isTablet ? <Navbar /> : <NavbarMobile />}
          {/* <Navbar /> */}
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
