import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { mediaQueryStrings } from '../../helpers/mediaQueryStrings';
import { routes } from '../../routes';

import {
  StyledOrdersHistoryTableRow,
  StyledRowDataWrapper,
  StyledLink,
} from './styles/StyledOrdersHistoryTableRow';

const OrdersHistoryTableRow = ({ orderDate, totalOrderPrice, orderId }) => {
  const is340 = useMediaQuery({
    query: mediaQueryStrings.max340,
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
                pathname: `${routes.accountOrders + orderId}`,
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
