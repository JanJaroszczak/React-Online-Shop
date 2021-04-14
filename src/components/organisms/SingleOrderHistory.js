import React from 'react';
import { useSelector } from 'react-redux';

import { routes } from '../../routes';
import Heading from '../../components/atoms/Heading';
import CartContentTable from '../../components/organisms/CartContentTable';
import CartSummary from '../../components/molecules/CartSummary';
import Button from '../atoms/Button';
import {
  StyledOrderSummaryWrapper,
  StyledLink,
} from './styles/StyledSingleOrderHistory';

const SingleOrderHistory = ({ orderDate, totalOrderPrice, orderId }) => {
  const currentUser = useSelector(({ currentUser }) => currentUser);

  console.log(orderDate);
  console.log(totalOrderPrice);

  let orderToDisplay = null;

  if (currentUser) {
    orderToDisplay = currentUser.ordersHistory.filter(
      (order) => order.orderId === orderId
    );
  }

  return (
    <StyledOrderSummaryWrapper>
      {currentUser && (
        <>
          <Heading
            type={'orderSummary'}
            heading={'ORDER SUMMARY'}
            headingDescription={`DATE: ${orderDate}`}
          />
          <CartContentTable order={orderToDisplay} orderSummary />
          <CartSummary
            // variant="checkout"
            totalOrderPrice={totalOrderPrice}
            orderSummary
          />
        </>
      )}
      <StyledLink to={routes.accountOrders} style={{ textDecoration: 'none' }}>
        <Button
          variant="noCapitalize"
          type="button"
          label="Go back to All Orders History"
        />
      </StyledLink>
    </StyledOrderSummaryWrapper>
  );
};

export default SingleOrderHistory;
