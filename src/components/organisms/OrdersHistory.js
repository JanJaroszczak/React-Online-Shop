import React from 'react';
import styled from 'styled-components';

import Heading from '../atoms/Heading';
import OrdersHistoryTable from './OrdersHistoryTable';

const StyledOrdersHistoryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 30px 20px;

  @media (max-width: 600px) {
    padding: 40px 0;
  }
`;

const OrdersHistory = () => {
  return (
    <StyledOrdersHistoryWrapper>
      <OrdersHistoryTable />
    </StyledOrdersHistoryWrapper>
  );
};

export default OrdersHistory;
