import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border-bottom: 1px solid ${({ theme }) => theme.colors.midGray};
  z-index: 200;
`;

export const StyledNavWrapper = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr;
  max-width: 1200px;
  height: 70px;
  margin: 0 auto;
`;

export const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto 1fr;
  grid-template-rows: 1fr;
  padding-left: 30px;

  @media (max-width: 860px) {
    padding-left: 20px;
  }
`;

export const StyledLi = styled.li`
  align-self: center;
  justify-self: center;
  margin: 0 10px;

  @media (max-width: 860px) {
    margin: 0 5px;
  }
`;

export const StyledNavRightHandSideWrapper = styled.div`
  align-self: center;
  justify-self: center;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.l};
  padding-right: 10px;

  i {
    display: inline-block;
    width: 50px;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
  }

  i.fa-shopping-cart {
    position: relative;
  }
`;

export const StyledAdjustedIcon = styled.i`
  display: inline-block;
  width: 50px;
  padding: 10px 0;
  text-align: center;
  vertical-align: -5px;
`;

export const StyledAccountNavLink = styled(NavLink)`
  position: relative;
  margin: 0 12px;
  vertical-align: 2px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.mainDark};
  border: none;
  background-color: transparent;
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

  &:hover:before,
  &.active:before {
    visibility: visible;
    transform: scaleX(1);
  }

  @media (max-width: 860px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;
