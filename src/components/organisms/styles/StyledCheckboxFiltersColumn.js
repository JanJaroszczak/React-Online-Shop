import styled, { css } from 'styled-components';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

const { max768 } = mediaQueryStrings;

export const StyledColumn = styled.div`
  margin-top: 57px;
  width: 280px;

  @media ${max768} {
    display: none;

    ${({ isTablet }) =>
      isTablet &&
      css`
        display: block;
        width: 100%;
        margin-top: 15px;
      `}
  } ;
`;

export const StyledColumnHeading = styled.div`
  padding: 15px 25px;
  background-color: ${({ theme }) => theme.colors.mainDark};
  color: ${({ theme }) => theme.colors.mainWhite};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainWhite};

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }

  @media ${max768} {
    padding-left: 45px;
    color: ${({ theme }) => theme.colors.mainDark};
    background-color: ${({ theme }) => theme.colors.mainWhite};
    border-bottom: 1px solid ${({ theme }) => theme.colors.midGray};
  } ;
`;

export const StyledPriceFilter = styled.div`
  padding: 15px 25px 20px;
  background-color: ${({ theme }) => theme.colors.mainDark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainWhite};

  @media ${max768} {
    padding-left: 45px;
    background-color: ${({ theme }) => theme.colors.mainWhite};
    border-bottom: 1px solid ${({ theme }) => theme.colors.midGray};
  }

  h3 {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.mainWhite};
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.light};

    @media ${max768} {
      color: ${({ theme }) => theme.colors.mainDark};
    }
  }

  label {
    margin: 8px 0 5px;
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.mainWhite};

    @media ${max768} {
      color: ${({ theme }) => theme.colors.mainDark};
    }
  }

  input {
    height: 25px;
    padding-left: 5px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-family: inherit;
    outline: none;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
