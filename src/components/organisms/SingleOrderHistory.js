import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { routes } from '../../routes';
import Heading from '../../components/atoms/Heading';
import CartContentTable from '../../components/organisms/CartContentTable';
import CartSummary from '../../components/molecules/CartSummary';
import { useSelector } from 'react-redux';
import Button from '../atoms/Button';

const StyledOrderSummaryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

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

  const onGoBackToAllOrdersHandler = () => {};

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
      <Link to={routes.accountOrders} style={{ textDecoration: 'none' }}>
        <Button
          clicked={onGoBackToAllOrdersHandler}
          variant="noCapitalize"
          type="button"
          label="Go back to All Orders History"
        />
      </Link>
    </StyledOrderSummaryWrapper>
  );
};

export default SingleOrderHistory;
