import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/mainTheme';
import styled from 'styled-components';
import ScrollUpButton from 'react-scroll-up-button';

import GlobalStyle from '../globalStyles/GlobalStyles';
import Navbar from '../components/organisms/navigations/Navbar';
import Footer from '../components/organisms/navigations/Footer';
import CartModal from '../components/organisms/CartModal';
import NavbarMobile from '../components/organisms/navigations/NavbarMobile';

const StyledWrapper = styled.div`
  min-height: calc(100vh - 140px);
  padding-bottom: 30px;
  margin-top: 70px;

  @media (max-width: 815px) {
    min-height: calc(100vh - 50px);
    padding-bottom: 100px;
    margin-top: 50px;
    margin-bottom: -70px;
  } ;
`;

const MainTemplate = ({ children }) => {
  const isDesktopNavbar = useMediaQuery({
    query: '(min-width: 750px)',
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        {isDesktopNavbar ? <Navbar /> : <NavbarMobile />}
        <StyledWrapper>
          {/* <Navbar /> */}
          <CartModal />
          {/* To co ma widok */}
          {children}
        </StyledWrapper>
        <ScrollUpButton
          style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
        />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
