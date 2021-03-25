import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { routes } from '../../../routes';
import { auth } from '../../../firebase/firebaseConfig';
import styled from 'styled-components';

import logo from '../../../assets/images/logo3.png';
import { useSelector, useDispatch } from 'react-redux';
import { setCartOpen } from '../../../actions';

const StyledNav = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

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

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const StyledNavIcons = styled.div`
  align-self: center;
  justify-self: center;
  font-size: ${({ theme }) => theme.fontSizes.l};
  padding-right: 20px;

  /* border: 1px solid black; */

  i {
    padding: 10px 20px;

    /* border: 1px solid black; */
  }

  i.fa-shopping-cart {
    position: relative;
  }
`;

const StyledCartCounter = styled.div`
  position: absolute;
  top: 3px;
  right: 11px;
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

const StyledLink = styled(Link)`
  position: relative;
  margin: 0 12px;
  vertical-align: 2px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.mainDark};
  text-decoration: none;

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

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const StyledLogOutButton = styled.button`
  position: relative;
  margin: 0 12px;
  vertical-align: 2px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.mainDark};
  border: none;
  background-color: transparent;

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

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();

  const cartCounter = useSelector(({ counter }) => counter);
  const currentUser = useSelector(({ currentUser }) => currentUser);

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        console.log('signed out');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledNav>
      <StyledNavWrapper>
        <StyledLogo>
          {/* <StyledImg src={'../../../assets/images/logo.png'} /> */}
          <img src={logo} alt="Logo" />
        </StyledLogo>
        <StyledUl>
          <StyledLi>
            <StyledNavLink to={routes.home}>Home</StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to={routes.products}>Products</StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to={routes.contact}>Contact</StyledNavLink>
          </StyledLi>
          {/* <StyledLi>
            <StyledNavLink to={routes.upload}>Upload</StyledNavLink>
          </StyledLi> */}
        </StyledUl>
        <StyledNavIcons>
          <i className="fas fa-search"></i>
          <i
            className="fas fa-shopping-cart"
            onClick={() => dispatch(setCartOpen())}
          >
            <StyledCartCounter>
              <span>{cartCounter}</span>
            </StyledCartCounter>
          </i>

          {currentUser ? null : (
            <StyledLink to={routes.signup}>Sign Up</StyledLink>
          )}
          {currentUser ? (
            <StyledLogOutButton onClick={logout} type="button">
              Log Out
            </StyledLogOutButton>
          ) : (
            <StyledLink to={routes.login}>Log In</StyledLink>
          )}
        </StyledNavIcons>
      </StyledNavWrapper>
    </StyledNav>
  );
};

export default Navbar;
