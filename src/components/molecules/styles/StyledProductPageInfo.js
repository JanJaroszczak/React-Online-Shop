import styled from 'styled-components';

export const StyledProductInfoWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 50px 30px;
  /* border: 1px solid black; */
`;

export const StyledProductDescription = styled.p`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const StyledPrice = styled.div`
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.lightDark};
`;

export const StyledSizeChoice = styled.div`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  /* border: 1px solid black; */
`;

export const StyledSelect = styled.select`
  display: block;
  width: 45px;
  height: 40px;
  margin-top: 3px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.light};

  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.declicateGray};
  color: ${({ theme }) => theme.colors.mainDark};
  border: none;

  /* border: 1px solid black; */

  option {
    font-weight: inherit;
  }
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
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.extraDarkGray};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGray};
    cursor: not-allowed;
  }
`;
