import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import SearchProductsPopper from '../../molecules/SearchProductsPopper';
import useOnClickOutside from '../../../utils/useOnClickOutside';

import { routes } from '../../../routes';
import { setCartOpen, toggleSearchPanel } from '../../../actions';

import {
  StyledNav,
  StyledNavWrapper,
  StyledUl,
  StyledLi,
  StyledNavRightHandSideWrapper,
  StyledAdjustedIcon,
  StyledAccountNavLink,
} from './styles/StyledNavbar';
import {
  StyledLogo,
  StyledNavLink,
  StyledCartCounter,
} from './styles/StyledCommonNavbarElements';

import logo from '../../../assets/images/logo3.png';

const Navbar = () => {
  const outsideClickRef = useRef();
  const dispatch = useDispatch();

  const cartCounter = useSelector(
    ({ productsAndCart }) => productsAndCart.counter
  );
  const currentUser = useSelector(({ user }) => user.currentUser);
  const isSearchPanelOn = useSelector(
    ({ searchPanel }) => searchPanel.isSearchPanelOn
  );

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(outsideClickRef, () => dispatch(toggleSearchPanel()));

  const {
    home,
    products,
    contact,
    mobileSearch,
    signup,
    accountOrders,
    login,
  } = routes;

  const toggleSearchBarVisiblity = () => {
    dispatch(toggleSearchPanel());
  };

  const renderSearchPanel = () => (
    <>
      {isSearchPanelOn ? (
        <div ref={outsideClickRef}>
          <SearchProductsPopper />
          <StyledAdjustedIcon
            className="fas fa-times"
            onClick={toggleSearchBarVisiblity}
          ></StyledAdjustedIcon>
        </div>
      ) : isDesktop ? (
        <i className="fas fa-search" onClick={toggleSearchBarVisiblity}></i>
      ) : (
        <StyledNavLink to={mobileSearch} search="diff">
          <i className="fas fa-search"></i>
        </StyledNavLink>
      )}
    </>
  );

  const renderCartIcon = () => (
    <i className="fas fa-shopping-cart" onClick={() => dispatch(setCartOpen())}>
      <StyledCartCounter cartCounter={cartCounter}>
        <span>{cartCounter}</span>
      </StyledCartCounter>
    </i>
  );

  const renderAccountLinks = () => (
    <>
      {currentUser ? null : (
        <StyledAccountNavLink to={signup}>Sign Up</StyledAccountNavLink>
      )}
      {currentUser ? (
        <StyledAccountNavLink to={accountOrders}>
          My Account
        </StyledAccountNavLink>
      ) : (
        <StyledAccountNavLink to={login}>Log In</StyledAccountNavLink>
      )}
    </>
  );

  return (
    <StyledNav>
      <StyledNavWrapper>
        <StyledLogo>
          <Link to={home}>
            <img src={logo} alt="Logo" />
          </Link>
        </StyledLogo>
        <StyledUl>
          <StyledLi>
            <StyledNavLink to={home} exact>
              Home
            </StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to={products}>Products</StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to={contact}>Contact</StyledNavLink>
          </StyledLi>
        </StyledUl>
        <StyledNavRightHandSideWrapper>
          {renderSearchPanel()}
          {renderCartIcon()}
          {renderAccountLinks()}
        </StyledNavRightHandSideWrapper>
      </StyledNavWrapper>
    </StyledNav>
  );
};

export default Navbar;
