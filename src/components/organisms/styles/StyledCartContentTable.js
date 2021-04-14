import styled, { css } from 'styled-components';

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
    /* overflow: hidden; */
    text-overflow: ellipsis;
    /* white-space: nowrap; */

    /* border: 1px solid black; */

    @media (max-width: 480px) {
      padding: 0;
    }
  }

  th {
    /* position: sticky; */
    top: 0;
    background-color: ${({ theme }) => theme.colors.mainWhite};
    text-align: left;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizes.s};
    color: black;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

    @media (max-width: 350px) {
      font-size: ${({ theme }) => theme.fontSizes.xxs};
    }
  }

  td {
    padding-top: 10px;
    padding-bottom: 10px;
    color: #808080;
  }

  @media (max-width: 820px) {
    grid-template-columns: minmax(280px, 1fr) minmax(150px, auto) minmax(
        140px,
        auto
      );
  }

  @media (max-width: 600px) {
    grid-template-columns: minmax(200px, 1fr) minmax(100px, auto) minmax(
        120px,
        auto
      );
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 90px 95px;

    ${({ orderSummary }) =>
      orderSummary &&
      css`
        grid-template-columns: 1fr 90px auto;
      `}
  }

  @media (max-width: 350px) {
    grid-template-columns: 1fr 80px 75px;
  }
`;
