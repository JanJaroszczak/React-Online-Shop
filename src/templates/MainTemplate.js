import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ThemeProvider } from 'styled-components';
import ScrollUpButton from 'react-scroll-up-button';

import useOnClickOutside from '../utils/useOnClickOutside';
import GlobalStyle from '../globalStyles/GlobalStyles';
import Navbar from '../components/organisms/navigations/Navbar';
import Footer from '../components/organisms/navigations/Footer';
import CartModal from '../components/organisms/CartModal';
import NavbarMobile from '../components/organisms/navigations/NavbarMobile';
import TermsModal from '../components/organisms/TermsModal';

import { mediaQueryStrings } from '../helpers/mediaQueryStrings';
import { mainTheme } from '../themes/mainTheme';

import { StyledWrapper } from './styles/StyledMainTemplate';

const MainTemplate = ({ children }) => {
  const [mobileMenuOn, setMobileMenuOn] = useState(false);
  const outsideClickRef = useRef();

  useOnClickOutside(outsideClickRef, () => {
    setMobileMenuOn((prevState) => !prevState);
  });

  const isDesktopNavbar = useMediaQuery({
    query: mediaQueryStrings.min751,
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        {isDesktopNavbar ? (
          <Navbar />
        ) : (
          <div ref={outsideClickRef}>
            <NavbarMobile mobileMenuOn={mobileMenuOn} />
          </div>
        )}
        <StyledWrapper>
          <CartModal />
          <TermsModal />
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
