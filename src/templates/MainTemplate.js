import React from 'react';
import Media from 'react-media';
import GlobalStyle from '../globalStyles/GlobalStyles';
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

// const StyledNavbarSwitch;

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <StyledWrapper>
          {/* <StyledNavbarSwitch> */}
          <Media
            queries={{
              small: '(max-width: 874px)',
              // medium: '(min-width: 600px) and (max-width: 1199px)',
              large: '(min-width: 875px)',
            }}
          >
            {(matches) => (
              <>
                {/* {matches.small && <p>I am small!</p>} */}
                {matches.small && <NavbarMobile />}
                {matches.large && <Navbar />}
              </>
            )}
          </Media>
          {/* </StyledNavbarSwitch> */}
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
