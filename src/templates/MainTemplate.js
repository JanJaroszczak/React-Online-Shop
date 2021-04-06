import React from 'react';
import GlobalStyle from '../globalStyles/GlobalStyles';
import { useMediaQuery } from 'react-responsive';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/mainTheme';
import styled from 'styled-components';
import Navbar from '../components/organisms/navigations/Navbar';
import Footer from '../components/organisms/navigations/Footer';
import CartModal from '../components/organisms/CartModal';
import NavbarMobile from '../components/organisms/navigations/NavbarMobile';

const StyledWrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 110px;
  margin-bottom: -70px;
`;

const MainTemplate = ({ children }) => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1024px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-device-width: 800px)',
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <StyledWrapper>
          {isDesktop ? <Navbar /> : <NavbarMobile />}
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
