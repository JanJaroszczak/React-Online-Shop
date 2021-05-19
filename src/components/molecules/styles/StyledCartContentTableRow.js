import styled from 'styled-components';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

const { max350, max480 } = mediaQueryStrings;

export const StyledTableRow = styled.tr`
  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  td .gridWrapper {
    display: grid;
    grid-template-columns: 100px auto;

    @media ${max480} {
      grid-template-columns: 100px;
      grid-template-rows: auto auto;
    }

    @media ${max350} {
      grid-template-columns: 80px;
      grid-template-rows: auto auto;
    }
  }
`;

export const StyledPrice = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.mainDark};

  i {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: ${({ theme }) => theme.fontSizes.l};
    cursor: pointer;
  }

  i:hover {
    color: ${({ theme }) => theme.colors.extraDarkGray};
  }
`;
