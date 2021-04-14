import styled, { css } from 'styled-components';

export const StyledProductInfoWrapper = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  padding: 50px 30px 0;
  overflow: hidden;

  /* border: 1px solid black; */

  @media (max-width: 768px) {
    width: 83vw;
    padding: 10px 0;
  } ;
`;

export const StyledExtraState = styled.span`
  position: absolute;
  left: 34px;
  top: 13px;
  padding: 2px 4px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  text-transform: uppercase;

  border: 1px solid ${({ theme }) => theme.colors.midGray};

  &:before {
    z-index: -1;
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border: 1px solid ${({ theme }) => theme.colors.midGray};
  }
`;

export const StyledProductDescription = styled.p`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: justify;
`;

export const StyledPrice = styled.div`
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.lightDark};

  span.previousPrice {
    padding-left: 12px;
    font-size: ${({ theme }) => theme.fontSizes.m};
    text-decoration: line-through;
    vertical-align: text-top;
  }
`;

export const StyledSizeChoice = styled.div`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  /* border: 1px solid black; */
`;

export const StyledSelect = styled.select`
  display: block;
  width: 45px;
  width: 45px;
  height: 40px;
  margin-top: 3px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.light};

  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.declicateGray};
  color: ${({ theme }) => theme.colors.mainDark};
  border: none;
  outline: none;

  /* border: 1px solid black; */

  option {
    font-weight: inherit;
  }

  @media (max-width: 768px) {
    width: 58px;
  } ;
`;

export const StyledError = styled.span`
  display: block;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: red;
`;

export const StyledSubmitButton = styled.button`
  display: block;
  margin-bottom: 20px;
  padding: 7px 15px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  background-color: ${({ theme }) => theme.colors.mainDark};
  color: ${({ theme }) => theme.colors.mainWhite};
  border: none;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.extraDarkGray};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
    cursor: not-allowed;
  }
`;
