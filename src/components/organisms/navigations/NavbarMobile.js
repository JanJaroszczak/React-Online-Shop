import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HamburgerMenu from 'react-hamburger-menu';

import { setCartOpen } from '../../../actions';
import { routes } from '../../../routes';
import logo from '../../../assets/images/logo3.png';
import {
  StyledMobileNavbar,
  StyledLogo,
  StyledIconsWrapper,
  StyledIcon,
  StyledCartCounter,
  StyledMenu,
  StyledUl,
  StyledLi,
  StyledNavLink,
  StyledAccountUl,
  StyledAccountNavLink,
} from './styles/StyledNavbarMobile';

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
        <StyledLogo>
          <Link to={routes.home} onClick={() => setMenuToggle(false)}>
            <img src={logo} alt="Logo" />
          </Link>
        </StyledLogo>
        <StyledIconsWrapper>
          <StyledIcon search>
            <StyledNavLink
              to={routes.mobileSearch}
              onClick={() => setMenuToggle(false)}
            >
              <i className="fas fa-search"></i>
            </StyledNavLink>
          </StyledIcon>

          <StyledIcon cart>
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
