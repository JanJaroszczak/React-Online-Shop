import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import OrdersHistoryTableRow from '../molecules/OrdersHistoryTableRow';

const StyledTable = styled.table`
  display: grid;
  border-collapse: collapse;
  grid-template-columns: minmax(300px, 1fr) minmax(250px, auto);
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
`;

const OrdersHistoryTable = () => {
  const [ordersHistoryRows, setOrdersHistoryRows] = useState(null);
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

      console.log('ordersHistoryRowData:', ordersHistoryRowData);

      const ordersHistoryRows = ordersHistoryRowData.map((order) => (
        <OrdersHistoryTableRow
          orderDate={order.orderDate}
          totalOrderPrice={order.totalOrderPrice}
          orderId={order.orderId}
          key={order.orderId}
        />
      ));

      console.log('ordersHistoryRows:', ordersHistoryRows);

      setOrdersHistoryRows(ordersHistoryRows);
    }
  }, [currentUser]);

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th>ORDER DATE</th>
            <th>TOTAL PRICE</th>
          </tr>
        </thead>
        <tbody>{ordersHistoryRows}</tbody>
      </StyledTable>
    </>
  );
};

export default OrdersHistoryTable;
