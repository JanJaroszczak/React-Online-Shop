import styled, { css } from 'styled-components';

export const StyledQuantityChoice = styled.div`
  display: inline-block;
  margin-left: 50px;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  ${({ cart }) =>
    cart &&
    css`
      display: flex;
      align-items: center;
      height: 100%;
      margin-left: 0;
    `}

  @media (max-width: 768px) {
    ${({ cart }) =>
      cart &&
      css`
        margin-left: 3px;
      `}
  }
`;

export const StyledQuantityInput = styled.div`
  display: block;

  input {
    height: 40px;
    width: 45px;
    margin: 3px 2px 0;
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    font-family: inherit;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.declicateGray};
    color: ${({ theme }) => theme.colors.mainDark};
    border: none;
    outline: none;
    border-radius: 0;

    @media (max-width: 768px) {
      ${({ cart }) =>
        cart &&
        css`
          height: 25px;
          width: 25px;
        `}
    }
    @media (max-width: 768px) {
      ${({ orderRow }) =>
        orderRow &&
        css`
          margin-left: 18px;
        `}
    }
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
    font-family: 'Roboto Condensed', sans-serif;
    background-color: ${({ theme }) => theme.colors.declicateGray};
    color: ${({ theme }) => theme.colors.mainDark};
    transition: 0.3s;

    border: none;

    @media (max-width: 768px) {
      ${({ cart }) =>
        cart &&
        css`
          height: 25px;
          width: 17px;
        `}
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGray};
    }
  }

  button span {
    font-weight: 700;
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
    transition: 1s linear;

    @media (max-width: 768px) {
      top: -10px;
      left: 5px;
      border-right: 7px solid transparent;
      border-left: 7px solid transparent;
      border-top: 25px solid black;
    }
  }

  .notInStock::after {
    content: 'NO MORE PAIRS AVAILABLE';
    position: absolute;
    z-index: 3;
    width: 170px;
    height: 26px;
    top: 7px;
    left: 34px;
    background-color: #000;
    color: #fff;
    font-size: 1.4rem;
    line-height: 26px;
    text-align: center;
    transition: 1s linear;

    @media (max-width: 768px) {
      top: -50px;
      left: -50px;
    }
  }
`;
