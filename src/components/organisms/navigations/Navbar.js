import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes';
import styled from 'styled-components';

import logo from '../../../assets/images/logo3.png';
import { useSelector, useDispatch } from 'react-redux';
import { setCartOpen } from '../../../actions';

const StyledNav = styled.div`
  position: fixed;
  z-index: 2;
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

const StyledLink = styled(NavLink)`
  display: block;
  position: relative;
  padding: 10px 30px;
  color: ${({ theme }) => theme.colors.mainDark};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
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

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const StyledNavIcons = styled.div`
  align-self: center;
  justify-self: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  padding-right: 20px;

  /* border: 1px solid black; */

  i {
    padding: 10px 20px;

    /* border: 1px solid black; */
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();

  const cartCounter = useSelector(({ counter }) => counter);

  return (
    <StyledNav>
      <StyledNavWrapper>
        <StyledLogo>
          {/* <StyledImg src={'../../../assets/images/logo.png'} /> */}
          <img src={logo} alt="Logo" />
        </StyledLogo>
        <StyledUl>
          <StyledLi>
            <StyledLink to={routes.home}>Home</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={routes.products}>Products</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={routes.contact}>Contact</StyledLink>
          </StyledLi>
        </StyledUl>
        <StyledNavIcons>
          <i className="fas fa-search"></i>
          {cartCounter}
          <i
            className="fas fa-shopping-cart"
            onClick={() => dispatch(setCartOpen())}
          ></i>
        </StyledNavIcons>
      </StyledNavWrapper>
    </StyledNav>
  );
};

export default Navbar;
