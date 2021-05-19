import styled, { css } from 'styled-components';

import { mediaQueryStrings } from '../../../helpers/mediaQueryStrings';

const { max350, max480, max600, max768, max820, max1000 } = mediaQueryStrings;

export const StyledTable = styled.table`
  display: grid;
  border-collapse: collapse;
  grid-template-columns: minmax(400px, 1fr) minmax(200px, auto) minmax(
      170px,
      auto
    );
  margin-top: 40px;

  thead,
  tbody,
  tr {
    display: contents;
  }

  th,
  td {
    padding: 15px;
    text-overflow: ellipsis;

    @media ${max480} {
      padding: 0;
    }
  }

  th {
    top: 0;
    background-color: ${({ theme }) => theme.colors.mainWhite};
    text-align: left;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: black;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

    @media ${max350} {
      font-size: ${({ theme }) => theme.fontSizes.xxs};
    }
  }

  td {
    padding-top: 10px;
    padding-bottom: 10px;
    color: #808080;
  }

  @media ${max1000} {
    ${({ orderSummary }) =>
      orderSummary &&
      css`
        grid-template-columns: minmax(280px, 1fr) minmax(150px, auto) minmax(
            140px,
            auto
          );
      `}
  }

  @media ${max820} {
    grid-template-columns: minmax(280px, 1fr) minmax(150px, auto) minmax(
        140px,
        auto
      );

    ${({ orderSummary }) =>
      orderSummary &&
      css`
        grid-template-columns: minmax(230px, 1fr) minmax(120px, auto) minmax(
            120px,
            auto
          );
      `}
  }

  @media ${max768} {
    ${({ orderSummary }) =>
      orderSummary &&
      css`
        grid-template-columns: minmax(170px, 1fr) minmax(80px, auto) minmax(
            80px,
            auto
          );
      `}
  }

  @media ${max600} {
    grid-template-columns: minmax(200px, 1fr) minmax(100px, auto) minmax(
        120px,
        auto
      );
  }

  @media ${max480} {
    grid-template-columns: 1fr 90px 95px;

    ${({ orderSummary }) =>
      orderSummary &&
      css`
        grid-template-columns: 1fr 90px auto;
      `}
  }

  @media ${max350} {
    grid-template-columns: 1fr 80px 75px;
  }
`;
