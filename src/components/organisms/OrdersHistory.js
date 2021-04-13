import React from 'react';
import styled from 'styled-components';

import Heading from '../atoms/Heading';
import OrdersHistoryTable from './OrdersHistoryTable';

const StyledOrdersHistoryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 30px 0;

  @media (max-width: 600px) {
    padding: 40px 0;
  }
`;

const OrdersHistory = () => {
  return (
    <StyledOrdersHistoryWrapper>
      {/* <Heading
        type={'accountPageWithoutSubheading'}
        heading={'ORDERS HISTORY'}
        headingDescription={``}
      /> */}
      <OrdersHistoryTable />
    </StyledOrdersHistoryWrapper>
  );
};

export default OrdersHistory;
