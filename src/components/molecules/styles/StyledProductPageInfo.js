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
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.lightDark};
`;

export const StyledSizeChoice = styled.div`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};

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

export const StyledQuantityChoice = styled.div`
  display: inline-block;
  margin-left: 50px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};

  /* border: 1px solid black; */
`;

export const StyledQuantityInput = styled.div`
  display: block;

  /* border: 1px solid black; */

  input {
    height: 40px;
    width: 45px;
    margin: 3px 2px 0;
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.declicateGray};
    color: ${({ theme }) => theme.colors.mainDark};
    border: none;
    outline: none;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    position: relative;
    height: 40px;
    width: 25px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-family: 'Roboto Condensed', sans-serif;
    background-color: ${({ theme }) => theme.colors.declicateGray};
    color: ${({ theme }) => theme.colors.mainDark};

    border: none;
  }

  .notInStock::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 27px;
    transform: translateY(-50%);
    border-right: 7px solid black;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    transition: 0.3s linear;
    /* opacity: 0; */
  }

  .notInStock::after {
    content: 'NO MORE PAIRS AVAILABLE';
    position: absolute;
    width: 170px;
    height: 26px;
    top: 7px;
    left: 34px;
    background-color: #000;
    color: #fff;
    font-size: 1.4rem;
    line-height: 26px;
    text-align: center;
    transition: 0.3s linear;
    /* opacity: 0; */
  }

  /* .notInStock:hover::after,
  .notInStock:hover::before {
    opacity: 1;
  } */
`;

export const StyledError = styled.span`
  display: block;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: red;
`;

export const StyledSubmitButton = styled.button`
  display: block;
  margin-bottom: 20px;
  padding: 7px 15px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  background-color: ${({ theme }) => theme.colors.lightDark};
  color: ${({ theme }) => theme.colors.mainWhite};
  border: none;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.extraDarkGray};
  }
`;
