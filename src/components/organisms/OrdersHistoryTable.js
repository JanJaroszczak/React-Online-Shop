import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import OrdersHistoryTableRow from '../molecules/OrdersHistoryTableRow';

const StyledTable = styled.table`
  display: grid;
  border-collapse: collapse;
  grid-template-columns: minmax(300px, 1fr) minmax(250px, auto);

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

    /* border: 1px solid black; */
  }

  th {
    top: 0;
    background-color: ${({ theme }) => theme.colors.mainWhite};
    text-align: left;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizes.s};

    color: ${({ theme }) => theme.colors.gray};

    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  td {
    padding-top: 10px;
    padding-bottom: 10px;
    color: #808080;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr;
  }
`;

const StyledTdMessage = styled.td`
  margin-top: 15px;
  font-size: ${({ theme }) => theme.fontSizes.s};

  span {
    color: ${({ theme }) => theme.colors.mainDark};
  }
`;

const OrdersHistoryTable = () => {
  const [ordersHistoryRows, setOrdersHistoryRows] = useState({});

  const currentUser = useSelector(({ currentUser }) => currentUser);

  useEffect(() => {
    if (currentUser) {
      const allOrderIds = currentUser.ordersHistory.map(
        (order) => order.orderId
      );

      console.log('allIds:', allOrderIds);

      const uniqueOrderIds = Array.from(new Set(allOrderIds));

      console.log('unique Ids:', uniqueOrderIds);

      const ordersHistoryRowData = uniqueOrderIds.map((uniqueOrderId) => {
        let totalOrderPrice = 0;
        currentUser.ordersHistory.forEach((order) => {
          if (order.orderId === uniqueOrderId) {
            totalOrderPrice = totalOrderPrice + order.productPrice;
          }
        });
        return {
          orderDate: uniqueOrderId.substring(0, 10),
          totalOrderPrice,
          orderId: uniqueOrderId,
        };
      });

      const ordersHistoryRows = ordersHistoryRowData.map((order) => (
        <OrdersHistoryTableRow
          orderDate={order.orderDate}
          totalOrderPrice={order.totalOrderPrice}
          orderId={order.orderId}
          key={order.orderId}
        />
      ));

      setOrdersHistoryRows(ordersHistoryRows);
    }
  }, [currentUser]);

  console.log(ordersHistoryRows);
  console.log(typeof ordersHistoryRows);
  console.log(Boolean(ordersHistoryRows));
  console.log(Object.keys(ordersHistoryRows));
  console.log(Object.keys(ordersHistoryRows).length);

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th>ORDER DATE</th>
            <th>TOTAL PRICE</th>
          </tr>
        </thead>
        <tbody>
          {!currentUser && Object.keys(ordersHistoryRows).length === 0 ? (
            <tr>
              <StyledTdMessage>
                <span>Loading...</span>
              </StyledTdMessage>
            </tr>
          ) : currentUser && Object.keys(ordersHistoryRows).length === 0 ? (
            <tr>
              <StyledTdMessage>
                <span>You haven't purchased anything yet.</span>
              </StyledTdMessage>
            </tr>
          ) : (
            ordersHistoryRows
          )}
        </tbody>
      </StyledTable>
    </>
  );
};

export default OrdersHistoryTable;
