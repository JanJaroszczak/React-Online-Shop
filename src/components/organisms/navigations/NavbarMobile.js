import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HamburgerMenu from 'react-hamburger-menu';

import { setCartOpen } from '../../../actions';
import { routes } from '../../../routes';
import logo from '../../../assets/images/logo3.png';

const StyledMobileNavbar = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border-bottom: 1px solid ${({ theme }) => theme.colors.midGray};
  z-index: 100;

  /* border: 1px solid black; */
`;

const StyledLogo = styled.div`
  align-self: center;
  justify-self: center;
  padding: 0 20px;

  /* border: 1px solid black; */

  img {
    height: 40px;
  }

  @media (max-width: 310px) {
    padding: 0 10px;
  }
`;

const StyledIconsWrapper = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;

  /* border: 1px solid black; */
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ burger }) => (burger ? '70px' : '50px')};
  font-size: 3rem;
  /* z-index: 200; */

  /* border: 1px solid black; */

  i.fa-shopping-cart,
  i.fa-search {
    font-size: 2.5rem;
  }

  i.fa-shopping-cart {
    position: relative;
  }
`;

const StyledCartCounter = styled.div`
  position: absolute;
  top: -6px;
  right: -7px;
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

const StyledMenu = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  top: -300px;
  padding: 10px 0;
  z-index: 90;
  border-bottom: 2px solid ${({ theme }) => theme.colors.midGray};
  /* color: ${({ theme }) => theme.colors.mainDark}; */
  background-color: ${({ theme }) => theme.colors.extraLightGray};
  transition: 0.3s;

  ${({ menuToggle }) =>
    menuToggle &&
    css`
      top: 50px;
    `}
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;

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
  /* color: ${({ theme }) => theme.colors.mainWhite}; */
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

  &.active:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const StyledAccountUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const StyledAccountNavLink = styled(NavLink)`
  /* display: block; */
  /* margin: 0 12px; */
  /* vertical-align: 2px; */
  /* font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.mainDark};
  border: none;
  background-color: transparent;
  text-decoration: none; */

  display: block;
  position: relative;
  padding: 10px 20px;
  /* color: ${({ theme }) => theme.colors.mainWhite}; */
  color: ${({ theme }) => theme.colors.mainDark};

  font-size: ${({ theme }) => theme.fontSizes.l};
  text-decoration: none;

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

  &.active:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const NavbarMobile = ({ mobileMenuOn, onMobileMenuChange }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const dispatch = useDispatch();

  const cartCounter = useSelector(({ counter }) => counter);
  const currentUser = useSelector(({ currentUser }) => currentUser);

  const handleCartIconClick = () => {
    setMenuToggle(false);
    dispatch(setCartOpen());
  };

  const handleMenuClick = () => {
    setMenuToggle((prevState) => !prevState);
  };

  useEffect(() => {
    onMobileMenuChange();
  }, [menuToggle]);

  useEffect(() => {
    setMenuToggle(false);
  }, [mobileMenuOn]);

  return (
    <>
      <StyledMobileNavbar>
        <StyledLogo>
          <Link to={routes.home} onClick={() => setMenuToggle(false)}>
            <img src={logo} alt="Logo" />
          </Link>
        </StyledLogo>
        <StyledIconsWrapper>
          <StyledIcon>
            <StyledNavLink
              to={routes.mobileSearch}
              onClick={() => setMenuToggle(false)}
            >
              <i className="fas fa-search"></i>
            </StyledNavLink>
          </StyledIcon>

          <StyledIcon>
            <i className="fas fa-shopping-cart" onClick={handleCartIconClick}>
              <StyledCartCounter>
                <span>{cartCounter}</span>
              </StyledCartCounter>
            </i>
          </StyledIcon>
          <StyledIcon menuToggle={menuToggle} burger>
            <HamburgerMenu
              isOpen={menuToggle}
              menuClicked={handleMenuClick}
              width={23}
              height={17}
              strokeWidth={3}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.2}
            />
          </StyledIcon>
        </StyledIconsWrapper>
      </StyledMobileNavbar>
      <StyledMenu menuToggle={menuToggle}>
        <StyledUl>
          <StyledLi>
            <StyledNavLink to={routes.home} exact onClick={handleMenuClick}>
              Home
            </StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to={routes.products} onClick={handleMenuClick}>
              Products
            </StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to={routes.contact} onClick={handleMenuClick}>
              Contact
            </StyledNavLink>
          </StyledLi>
        </StyledUl>
        <StyledAccountUl>
          {currentUser ? null : (
            <StyledLi>
              <StyledAccountNavLink
                to={routes.signup}
                onClick={handleMenuClick}
              >
                Sign Up
              </StyledAccountNavLink>
            </StyledLi>
          )}
          {currentUser ? (
            <StyledLi>
              <StyledAccountNavLink
                to={routes.accountOrders}
                onClick={handleMenuClick}
              >
                My Account
              </StyledAccountNavLink>
            </StyledLi>
          ) : (
            <StyledLi>
              <StyledAccountNavLink to={routes.login} onClick={handleMenuClick}>
                Log In
              </StyledAccountNavLink>
            </StyledLi>
          )}
        </StyledAccountUl>
      </StyledMenu>
    </>
  );
};

export default NavbarMobile;
