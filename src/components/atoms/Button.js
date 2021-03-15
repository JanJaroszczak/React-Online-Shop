import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 7px 15px;
  background-color: ${({ theme }) => theme.colors.mainDark};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.mainWhite};
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: capitalize;
  border-radius: 2px;
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.extraDarkGray};
  }

  ${({ type }) =>
    type === 'specialOffer' &&
    css`
      align-self: center;
      justify-self: center;
    `}
`;

const Button = ({ type, label }) => {
  return <StyledButton type={type}>{label}</StyledButton>;
};

export default Button;
