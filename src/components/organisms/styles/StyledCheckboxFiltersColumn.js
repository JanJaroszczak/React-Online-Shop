import styled from 'styled-components';

export const StyledColumn = styled.div`
  margin-top: 57px;
  width: 280px;
`;

export const StyledColumnTitle = styled.h2`
  padding: 15px 25px;
  background-color: ${({ theme }) => theme.colors.mainDark};
  color: ${({ theme }) => theme.colors.mainWhite};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainWhite};
`;

export const StyledPriceFilter = styled.div`
  padding: 15px 25px 20px;
  background-color: ${({ theme }) => theme.colors.mainDark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainWhite};

  h3 {
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.mainWhite};
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }

  label {
    margin: 8px 0 5px;
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.mainWhite};
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
