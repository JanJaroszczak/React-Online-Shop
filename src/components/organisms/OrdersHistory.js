import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import OrdersHistoryTable from './OrdersHistoryTable';
import Spinner from '../../components/atoms/Spinner';

import { mediaQueryStrings } from '../../helpers/mediaQueryStrings';
import { StyledOrdersHistoryWrapper } from './styles/StyledOrdersHistory';

const OrdersHistory = () => {
  const [isTableMounted, setIsTableMounted] = useState(false);

  const is600 = useMediaQuery({
    query: mediaQueryStrings.max600,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTableMounted(true);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <StyledOrdersHistoryWrapper>
      {isTableMounted ? (
        <OrdersHistoryTable />
      ) : (
        <Spinner
          isLoading={1}
          left={'50%'}
          top={is600 ? '100px' : '200px'}
          size={50}
          translateX={'-50%'}
          translateY={'0'}
        />
      )}
    </StyledOrdersHistoryWrapper>
  );
};

export default OrdersHistory;
