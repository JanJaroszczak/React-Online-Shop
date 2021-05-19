import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

const { max350, max480 } = mediaQueryStrings;

export const StyledLink = styled(Link)`
  align-self: center;
  text-decoration: none;
  outline: none;
`;

export const StyledImg = styled.img`
  align-self: center;
  width: 100%;

  ${({ searchModal }) =>
    searchModal &&
    css`
      margin-left: 10px;
    `}
`;

export const StyledProductInfo = styled.div`
  align-self: center;
  padding-left: 15px;

  @media ${max480} {
    ${({ cartModal }) =>
      !cartModal &&
      css`
        padding-left: 0;
      `}
  }

  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.mainDark};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    margin-bottom: 24px;

    ${({ searchModal }) =>
      searchModal &&
      css`
        margin-left: 10px;
        margin-bottom: 0;
      `}

    @media ${max480} {
      ${({ cartModal }) =>
        !cartModal &&
        css`
          font-size: ${({ theme }) => theme.fontSizes.xs};
          margin-bottom: 10px;
        `}
    }

    @media ${max350} {
      font-size: ${({ theme }) => theme.fontSizes.xxs};
    }
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.gray};

    @media ${max350} {
      font-size: ${({ theme }) => theme.fontSizes.xxs};
    }
  }
`;
