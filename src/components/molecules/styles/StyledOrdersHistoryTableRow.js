import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledOrdersHistoryTableRow = styled.tr`
  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

    /* border: 1px solid black; */
  }

  td .gridWrapper {
    display: grid;
    grid-template-columns: 100px auto;

    /* border: 1px solid black; */
  }
`;

export const StyledRowDataWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.mainDark};

  /* border: 1px solid black; */

  @media (max-width: 380px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  span {
    margin-left: auto;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    font-weight: ${({ theme }) => theme.fontWeights.light};

    @media (max-width: 380px) {
      font-size: ${({ theme }) => theme.fontSizes.ss};
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
`;
