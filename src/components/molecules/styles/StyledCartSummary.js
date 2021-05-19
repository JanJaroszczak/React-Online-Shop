import styled, { css } from 'styled-components';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

const { max600, max768 } = mediaQueryStrings;

export const StyledCartSummary = styled.div`
  width: 380px;
  margin: 40px 0 40px auto;

  ${({ variant }) =>
    variant === 'checkout' &&
    css`
      justify-self: center;
      margin: 123px 50px 0 0;
    `}

  @media ${max768} {
    width: 80vw;
    margin: 30px auto 0;

    ${({ orderSummary }) =>
      orderSummary &&
      css`
        width: 380px;
        margin: 40px 0 40px auto;
      `}
  }

  @media ${max600} {
    ${({ orderSummary }) =>
      orderSummary &&
      css`
        width: 80vw;
        margin: 30px auto 0;
      `}
  }
`;

export const StyledCartSummaryHeading = styled.h3`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

export const StyledListElement = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.declicateGray};

  ${({ total }) =>
    total &&
    css`
      font-weight: ${({ theme }) => theme.fontWeights.regular};
      color: ${({ theme }) => theme.colors.mainDark};
    `}
`;

export const StyledButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 7px 15px;
  background-color: ${({ theme }) => theme.colors.mainDark};
  color: ${({ theme }) => theme.colors.mainWhite};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  border: none;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.extraDarkGray};
  }

  @media ${max768} {
    margin: 20px auto 0;
  }
`;
