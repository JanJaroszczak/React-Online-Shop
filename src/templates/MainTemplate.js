import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../themes/mainTheme';
import styled from 'styled-components';
import ScrollUpButton from 'react-scroll-up-button';
import useOnClickOutside from '../hoc/useOnClickOutside';

import GlobalStyle from '../globalStyles/GlobalStyles';
import Navbar from '../components/organisms/navigations/Navbar';
import Footer from '../components/organisms/navigations/Footer';
import CartModal from '../components/organisms/CartModal';
import NavbarMobile from '../components/organisms/navigations/NavbarMobile';

const StyledWrapper = styled.div`
  min-height: calc(100vh - 140px);
  padding-bottom: 30px;
  margin-top: 70px;

  @media (max-width: 750px) {
    min-height: calc(100vh - 50px);
    padding-bottom: 100px;
    margin-top: 50px;
    margin-bottom: -70px;
  } ;
`;

const MainTemplate = ({ children }) => {
  const [mobileMenuOn, setMobileMenuOn] = useState(false);
  const outsideClickRef = useRef();

  useOnClickOutside(outsideClickRef, () => {
    console.log('outside click');
    if (mobileMenuOn) setMobileMenuOn(false);
  });

  const onMobileMenuChangeHandler = () => {
    setMobileMenuOn(true);
  };

  const isDesktopNavbar = useMediaQuery({
    query: '(min-width: 751px)',
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        {isDesktopNavbar ? (
          <Navbar />
        ) : (
          <div ref={outsideClickRef}>
            <NavbarMobile
              mobileMenuOn={mobileMenuOn}
              onMobileMenuChange={onMobileMenuChangeHandler}
            />
          </div>
        )}
        <StyledWrapper>
          <CartModal />
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
