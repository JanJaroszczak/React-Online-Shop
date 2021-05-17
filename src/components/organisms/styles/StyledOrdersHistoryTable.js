import styled from 'styled-components';

export const StyledOrdersHistoryTable = styled.table`
  display: grid;
  border-collapse: collapse;
  grid-template-columns: minmax(300px, 1fr) minmax(250px, auto);

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr;
  }

  thead,
  tbody,
  tr {
    display: contents;
  }

  th,
  td {
    padding: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 300px) {
      padding: 10px;
    }
  }

  th {
    top: 0;
    background-color: ${({ theme }) => theme.colors.mainWhite};
    text-align: left;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizes.s};

    color: ${({ theme }) => theme.colors.gray};

    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

    @media (max-width: 380px) {
      font-size: ${({ theme }) => theme.fontSizes.xxs};
    }
  }

  td {
    padding-top: 10px;
    padding-bottom: 10px;
    color: #808080;
  }
`;

export const StyledTdMessage = styled.td`
  margin-top: 15px;
  font-size: ${({ theme }) => theme.fontSizes.s};

  span {
    color: ${({ theme }) => theme.colors.mainDark};
  }
`;
