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
  min-height: calc(100vh - 140px);
  padding-bottom: 30px;
  margin-top: 70px;
  /* margin-bottom: -70px; */

  @media (max-width: 768px) {
    margin-top: 50px;
  } ;
`;

const MainTemplate = ({ children }) => {
  const isTablet = useMediaQuery({
    query: '(min-width: 769px)',
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        {isTablet ? <Navbar /> : <NavbarMobile />}
        <StyledWrapper>
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
