import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  padding: 7px 15px;
  background-color: ${({ theme }) => theme.colors.mainDark};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.mainWhite};
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: capitalize;
  border-radius: 4px;
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.extraDarkGray};
  }

  ${({ variant }) =>
    variant === 'specialOffer' &&
    css`
      align-self: center;
      justify-self: center;
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
