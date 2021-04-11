import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const StyledOrdersHistoryTableRow = styled.tr`
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

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
`;

const OrdersHistoryTableRow = ({ orderDate, totalOrderPrice, orderId }) => {
  const is340 = useMediaQuery({
    query: '(max-width: 340px)',
  });

  return (
    <StyledOrdersHistoryTableRow>
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
              CHECK{is340 ? <br /> : null} DETAILS
            </StyledLink>
          </span>
        </StyledRowDataWrapper>
      </td>
    </StyledOrdersHistoryTableRow>
  );
};

export default OrdersHistoryTableRow;
