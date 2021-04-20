import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLogo = styled.div`
  align-self: center;
  justify-self: center;
  padding-left: 20px;

  /* border: 1px solid black; */

  @media (max-width: 310px) {
    ${({ layout }) =>
      layout === 'mobile' &&
      css`
        padding: 0 10px;
      `}
  }

  img {
    height: ${({ layout }) => (layout === 'mobile' ? '40px' : '55px')};
  }
`;

export const StyledCartCounter = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.ss};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  background-color: ${({ theme }) => theme.colors.darkGray};
  color: ${({ theme }) => theme.colors.mainWhite};
  width: 18.5px;
  height: 18.5px;
  border-radius: 50%;

  ${({ layout }) =>
    layout === 'mobile' &&
    css`
      top: -6px;
      right: -7px;
    `}

  span {
    position: absolute;
    top: 4px;
    left: ${({ cartCounter }) => (cartCounter > 9 ? '3px' : '6.5px')};
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  position: relative;
  padding: ${({ layout }) => (layout === 'mobile' ? '10px 20px' : '10px 10px')};
  color: ${({ theme }) => theme.colors.mainDark};
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-decoration: none;
  text-transform: uppercase;

  @media (max-width: 860px) {
    ${({ layout }) =>
      layout !== 'mobile' &&
      css`
        font-size: ${({ theme }) => theme.fontSizes.m};
      `}

    ${({ search }) =>
      search === 'diff' &&
      css`
        font-size: ${({ theme }) => theme.fontSizes.l};
      `}
  }

  &:before {
    content: '';
    position: absolute;
    width: ${({ layout }) => (layout === 'mobile' ? '70%' : '84%')};
    height: 2px;
    bottom: 5px;
    left: 8%;
    left: ${({ layout }) => (layout === 'mobile' ? '15%' : '8%')};
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
