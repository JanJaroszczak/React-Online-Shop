import React from 'react';
import styled from 'styled-components';

import Heading from '../atoms/Heading';
import OrdersHistoryTable from './OrdersHistoryTable';

const StyledOrdersHistoryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const OrdersHistory = () => {
  return (
    <StyledOrdersHistoryWrapper>
      <Heading
        type={'orderSummary'}
        heading={'ORDERS HISTORY'}
        headingDescription={``}
      />
      <OrdersHistoryTable />
    </StyledOrdersHistoryWrapper>
  );
};

export default OrdersHistory;
