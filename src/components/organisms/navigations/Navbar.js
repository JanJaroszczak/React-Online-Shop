import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { routes } from '../../../routes';
import { setCartOpen, toggleSearchPanel } from '../../../actions';
import logo from '../../../assets/images/logo3.png';
import SearchProductsPopper from '../../molecules/SearchProductsPopper';
import useOnClickOutside from '../../../hoc/useOnClickOutside';
import {
  StyledNav,
  StyledNavWrapper,
  StyledLogo,
  StyledUl,
  StyledLi,
  StyledNavLink,
  StyledNavRightHandSideWrapper,
  StyledAdjustedIcon,
  StyledCartCounter,
  StyledAccountNavLink,
} from './styles/StyledNavbar';

const Navbar = () => {
  const outsideClickRef = useRef();
  const dispatch = useDispatch();

  const cartCounter = useSelector(({ counter }) => counter);
  const currentUser = useSelector(({ currentUser }) => currentUser);
  const isSearchPanelOn = useSelector(({ isSearchPanelOn }) => isSearchPanelOn);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(outsideClickRef, () => dispatch(toggleSearchPanel()));

  const toggleSearchBarVisiblity = () => {
    dispatch(toggleSearchPanel());
  };

  return (
    <StyledNav>
      <StyledNavWrapper>
        <StyledLogo>
          <Link to={routes.home}>
            <img src={logo} alt="Logo" />
          </Link>
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
            <StyledNavLink to={routes.mobileSearch} search="diff">
              <i className="fas fa-search"></i>
            </StyledNavLink>
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
