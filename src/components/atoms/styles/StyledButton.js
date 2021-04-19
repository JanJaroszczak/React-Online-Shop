import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  padding: 7px 15px;
  background-color: ${({ theme, color }) =>
    color === 'white' ? theme.colors.mainWhite : theme.colors.mainDark};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme, color }) =>
    color === 'white' ? theme.colors.mainDark : theme.colors.mainWhite};
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: capitalize;
  border-radius: 4px;
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme, color }) =>
      color === 'white'
        ? theme.colors.moderateGray
        : theme.colors.extraDarkGray};
  }

  ${({ variant }) =>
    (variant === 'clearFilters' || variant === 'clearFiltersDisabled') &&
    css`
      padding: 3px 6px;
      margin-top: 10px;
      font-size: ${({ theme }) => theme.fontSizes.xxs};
    `}

  ${({ variant }) =>
    variant === 'clearFiltersDisabled' &&
    css`
      color: ${({ theme }) => theme.colors.extraDarkGray};
      background-color: ${({ theme }) => theme.colors.midGray};
      cursor: default;

      &:hover {
        background-color: ${({ theme }) => theme.colors.midGray};
      }
    `}

  ${({ variant }) =>
    variant === 'specialOffer' &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.m};
    `}

  ${({ variant }) =>
    variant === 'questionModal' &&
    css`
      display: inline-block;
    `}

      ${({ variant }) =>
    variant === 'accountDataChange' &&
    css`
      margin-top: 10px;
    `}

    ${({ variant }) =>
    variant === 'noCapitalize' &&
    css`
      text-transform: none;
    `}

     ${({ variant }) =>
    variant === 'mobile' &&
    css`
      margin: 20px auto;
    `}
`;
