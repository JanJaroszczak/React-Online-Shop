import styled, { css } from 'styled-components';

import { buttonVariants } from '../../../utils/atomsTypesAndVariants';

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
    (variant === buttonVariants.clearFilters ||
      variant === buttonVariants.clearFiltersDisabled) &&
    css`
      padding: 3px 6px;
      margin-top: 10px;
      font-size: ${({ theme }) => theme.fontSizes.xxs};
    `}

  ${({ variant }) =>
    variant === buttonVariants.clearFiltersDisabled &&
    css`
      color: ${({ theme }) => theme.colors.extraDarkGray};
      background-color: ${({ theme }) => theme.colors.midGray};
      cursor: default;

      &:hover {
        background-color: ${({ theme }) => theme.colors.midGray};
      }
    `}

  ${({ variant }) =>
    variant === buttonVariants.specialOffer &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.m};
    `}

  ${({ variant }) =>
    variant === buttonVariants.questionModal &&
    css`
      display: inline-block;
    `}

      ${({ variant }) =>
    variant === buttonVariants.accountDataChange &&
    css`
      margin-top: 10px;
    `}

    ${({ variant }) =>
    variant === buttonVariants.noCapitalize &&
    css`
      text-transform: none;
    `}

     ${({ variant }) =>
    variant === buttonVariants.mobile &&
    css`
      margin: 20px auto;
    `}

     ${({ variant }) =>
    variant === buttonVariants.mobileTermsPage &&
    css`
      margin: 0 auto;
      text-transform: none;
    `}

       ${({ variant }) =>
    variant === buttonVariants.productInfo &&
    css`
      padding: 5px 7px;
      text-transform: none;
    `}
`;
