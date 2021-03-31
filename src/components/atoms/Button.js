import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
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
    `}

  ${({ variant }) =>
    variant === 'questionModal' &&
    css`
      display: inline-block;
    `}
    ${({ variant }) =>
    variant === 'noCapitalize' &&
    css`
      text-transform: none;
    `}
`;

const Button = ({ clicked, type, variant, label }) => {
  return (
    <StyledButton onClick={clicked} type={type} variant={variant}>
      {label}
    </StyledButton>
  );
};

export default Button;
