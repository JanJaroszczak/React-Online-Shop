import React from 'react';

import OrdersHistoryTable from './OrdersHistoryTable';
import { StyledOrdersHistoryWrapper } from './styles/StyledOrdersHistory';

const OrdersHistory = () => {
  return (
    <StyledOrdersHistoryWrapper>
      <OrdersHistoryTable />
    </StyledOrdersHistoryWrapper>
  );
};

export default OrdersHistory;
