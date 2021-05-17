import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import OrdersHistoryTableRow from '../molecules/OrdersHistoryTableRow';

import {
  StyledOrdersHistoryTable,
  StyledTdMessage,
} from './styles/StyledOrdersHistoryTable';

const OrdersHistoryTable = () => {
  const [ordersHistoryRows, setOrdersHistoryRows] = useState({});

  const currentUser = useSelector(({ user }) => user.currentUser);

  useEffect(() => {
    if (currentUser) {
      const allOrderIds = currentUser.ordersHistory.map(
        (order) => order.orderId
      );

      const uniqueOrderIds = Array.from(new Set(allOrderIds));

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

  return (
    <>
      <StyledOrdersHistoryTable>
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
      </StyledOrdersHistoryTable>
    </>
  );
};

export default OrdersHistoryTable;
