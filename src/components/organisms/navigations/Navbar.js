import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';
import styled from 'styled-components';

import logo from '../../../assets/images/logo3.png';
import { useSelector, useDispatch } from 'react-redux';
import { setCartOpen } from '../../../actions';

import SearchProductsPopper from '../../molecules/SearchProductsPopper';

const StyledNav = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border-bottom: 1px solid ${({ theme }) => theme.colors.midGray};

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
    top: 4px;
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
  const dispatch = useDispatch();

  const cartCounter = useSelector(({ counter }) => counter);
  const currentUser = useSelector(({ currentUser }) => currentUser);

  const [isSearchBarOpen, setIsSearchOpen] = useState(false);

  const toggleSearchBarVisiblity = () => {
    setIsSearchOpen(!isSearchBarOpen);
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
          {isSearchBarOpen ? (
            <>
              <SearchProductsPopper />
              <i
                className="fas fa-times"
                onClick={toggleSearchBarVisiblity}
              ></i>
            </>
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

export default Navbar;
