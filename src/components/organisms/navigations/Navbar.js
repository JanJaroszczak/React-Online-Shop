import React, { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../../assets/images/logo3.png';
import { setCartOpen, toggleSearchPanel } from '../../../actions';
import SearchProductsPopper from '../../molecules/SearchProductsPopper';

const StyledNav = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border-bottom: 1px solid ${({ theme }) => theme.colors.midGray};
  /* z-index: 200; */

  /* border: 1px solid black; */
`;

const StyledNavWrapper = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr;
  max-width: 1200px;
  height: 70px;
  margin: 0 auto;

  /* border: 1px solid black; */
`;

const StyledLogo = styled.div`
  align-self: center;
  justify-self: center;
  padding-left: 20px;

  /* border: 1px solid black; */

  img {
    height: 55px;
  }
`;

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto 1fr;
  grid-template-rows: 1fr;
  padding-left: 40px;

  /* border: 1px solid black; */
`;

const StyledLi = styled.li`
  align-self: center;
  justify-self: center;
  margin: 0 10px;

  /* border: 1px solid black; */
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  position: relative;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.mainDark};
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-decoration: none;
  text-transform: uppercase;

  &:before {
    content: '';
    position: absolute;
    width: 70%;
    height: 2px;
    bottom: 5px;
    left: 15%;
    background-color: ${({ theme }) => theme.colors.mainDark};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover:before,
  &.active:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const StyledNavRightHandSideWrapper = styled.div`
  align-self: center;
  justify-self: center;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.l};
  padding-right: 20px;

  /* border: 1px solid black; */

  i {
    display: inline-block;
    width: 50px;
    text-align: center;
    padding: 10px 0;

    /* border: 1px solid black; */
  }

  i.fa-shopping-cart {
    position: relative;
  }
`;

const StyledAdjustedIcon = styled.i`
  display: inline-block;
  width: 50px;
  padding: 10px 0;
  text-align: center;
  vertical-align: -5px;

  /* border: 1px solid black; */
`;

const StyledCartCounter = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.ss};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.mainWhite};
  width: 17px;
  height: 17px;
  border-radius: 50%;

  span {
    position: absolute;
    top: 3px;
    left: 5.5px;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

const StyledAccountNavLink = styled(NavLink)`
  position: relative;
  margin: 0 12px;
  vertical-align: 2px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.mainDark};
  border: none;
  background-color: transparent;
  text-decoration: none;

  /* border: 1px solid black; */

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.mainDark};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover:before,
  &.active:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const Navbar = () => {
  const ref = useRef();
  const dispatch = useDispatch();

  const cartCounter = useSelector(({ counter }) => counter);
  const currentUser = useSelector(({ currentUser }) => currentUser);
  const isSearchPanelOn = useSelector(({ isSearchPanelOn }) => isSearchPanelOn);

  // const [isSearchBarOpen, setIsSearchOpen] = useState(false);

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => dispatch(toggleSearchPanel()));

  const toggleSearchBarVisiblity = () => {
    // setIsSearchOpen(!isSearchBarOpen);
    dispatch(toggleSearchPanel());
  };

  return (
    <StyledNav>
      <StyledNavWrapper>
        <StyledLogo>
          <img src={logo} alt="Logo" />
        </StyledLogo>
        <StyledUl>
          <StyledLi>
            <StyledNavLink to={routes.home} exact>
              Home
            </StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to={routes.products}>Products</StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to={routes.contact}>Contact</StyledNavLink>
          </StyledLi>
        </StyledUl>
        <StyledNavRightHandSideWrapper>
          {isSearchPanelOn ? (
            <div ref={ref}>
              <SearchProductsPopper />
              <StyledAdjustedIcon
                className="fas fa-times"
                onClick={toggleSearchBarVisiblity}
              ></StyledAdjustedIcon>
            </div>
          ) : (
            <i className="fas fa-search" onClick={toggleSearchBarVisiblity}></i>
          )}

          <i
            className="fas fa-shopping-cart"
            onClick={() => dispatch(setCartOpen())}
          >
            <StyledCartCounter>
              <span>{cartCounter}</span>
            </StyledCartCounter>
          </i>

          {currentUser ? null : (
            <StyledAccountNavLink to={routes.signup}>
              Sign Up
            </StyledAccountNavLink>
          )}
          {currentUser ? (
            <StyledAccountNavLink to={routes.accountOrders}>
              My Account
            </StyledAccountNavLink>
          ) : (
            <StyledAccountNavLink to={routes.login}>
              Log In
            </StyledAccountNavLink>
          )}
        </StyledNavRightHandSideWrapper>
      </StyledNavWrapper>
    </StyledNav>
  );
};

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      // document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        // document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

export default Navbar;
