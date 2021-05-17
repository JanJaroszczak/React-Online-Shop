import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledMobileNavbar = styled.nav`
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
`;

export const StyledIconsWrapper = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ burger }) => (burger ? '70px' : '50px')};
  font-size: 3rem;
  padding: ${({ burger, cart }) => (burger ? '14px 0' : cart ? '10px 0' : '0')};
  cursor: pointer;

  i.fa-shopping-cart,
  i.fa-search {
    font-size: 2.5rem;
  }

  i.fa-shopping-cart {
    position: relative;
  }
`;

export const StyledMenu = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  top: -300px;
  padding: 10px 0;
  z-index: 90;
  border-bottom: 2px solid ${({ theme }) => theme.colors.midGray};
  background-color: ${({ theme }) => theme.colors.extraLightGray};
  transition: 0.3s;

  ${({ menuToggle }) =>
    menuToggle &&
    css`
      top: 50px;
    `}
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const StyledLi = styled.li`
  align-self: center;
  justify-self: center;
  margin: 0 10px;
`;

export const StyledAccountUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const StyledAccountNavLink = styled(NavLink)`
  display: block;
  position: relative;
  padding: 10px 20px;
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
