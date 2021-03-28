import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTableRow = styled.tr`
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

const StyledRowDataWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.mainDark};

  /* border: 1px solid black; */

  span {
    margin-left: auto;
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    font-weight: ${({ theme }) => theme.fontWeights.light};
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
`;

const OrdersHistoryTableRow = ({ orderDate, totalOrderPrice, orderId }) => {
  return (
    <StyledTableRow>
      <td>
        <StyledRowDataWrapper>{orderDate}</StyledRowDataWrapper>
      </td>
      <td>
        <StyledRowDataWrapper>
          {`$ ${totalOrderPrice}`}

          <span>
            {' '}
            <StyledLink
              to={{
                pathname: `/account/ordershistory/${orderId}`,
                state: { orderDate, totalOrderPrice },
              }}
            >
              CHECK DETAILS
            </StyledLink>
          </span>
        </StyledRowDataWrapper>
      </td>
    </StyledTableRow>
  );
};

export default OrdersHistoryTableRow;
