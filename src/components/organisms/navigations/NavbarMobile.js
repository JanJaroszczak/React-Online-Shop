import React, { useEffect, useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { routes } from '../../../routes';
import { setCartOpen } from '../../../actions';

import {
  StyledMobileNavbar,
  StyledIconsWrapper,
  StyledIcon,
  StyledMenu,
  StyledUl,
  StyledLi,
  StyledAccountUl,
  StyledAccountNavLink,
} from './styles/StyledNavbarMobile';
import {
  StyledLogo,
  StyledNavLink,
  StyledCartCounter,
} from './styles/StyledCommonNavbarElements';

import logo from '../../../assets/images/logo3.png';

const NavbarMobile = ({ mobileMenuOn }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const dispatch = useDispatch();

  const cartCounter = useSelector(
    ({ productsAndCart }) => productsAndCart.counter
  );
  const currentUser = useSelector(({ user }) => user.currentUser);

  const handleCartIconClick = () => {
    setMenuToggle(false);
    dispatch(setCartOpen());
  };

  const handleMenuClick = () => {
    setMenuToggle((prevState) => !prevState);
  };

  useEffect(() => {
    setMenuToggle(false);
  }, [mobileMenuOn]);

  return (
    <>
      <StyledMobileNavbar>
        <StyledLogo layout="mobile">
          <Link to={routes.home} onClick={() => setMenuToggle(false)}>
            <img src={logo} alt="Logo" />
          </Link>
        </StyledLogo>
        <StyledIconsWrapper>
          <StyledIcon search>
            <StyledNavLink
              layout="mobile"
              to={routes.mobileSearch}
              onClick={() => setMenuToggle(false)}
            >
              <i className="fas fa-search"></i>
            </StyledNavLink>
          </StyledIcon>

          <StyledIcon cart>
            <i className="fas fa-shopping-cart" onClick={handleCartIconClick}>
              <StyledCartCounter layout="mobile" cartCounter={cartCounter}>
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
            <StyledNavLink
              layout="mobile"
              to={routes.home}
              exact
              onClick={handleMenuClick}
            >
              Home
            </StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink
              layout="mobile"
              to={routes.products}
              onClick={handleMenuClick}
            >
              Products
            </StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink
              layout="mobile"
              to={routes.contact}
              onClick={handleMenuClick}
            >
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
