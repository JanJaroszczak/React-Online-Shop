import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

const { max380 } = mediaQueryStrings;

export const StyledOrdersHistoryTableRow = styled.tr`
  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  td .gridWrapper {
    display: grid;
    grid-template-columns: 100px auto;
  }
`;

export const StyledRowDataWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.mainDark};

  @media ${max380} {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  span {
    margin-left: auto;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    font-weight: ${({ theme }) => theme.fontWeights.light};

    @media ${max380} {
      font-size: ${({ theme }) => theme.fontSizes.ss};
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
`;
