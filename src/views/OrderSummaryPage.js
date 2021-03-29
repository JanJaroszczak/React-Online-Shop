import React, { useEffect } from 'react';
import styled from 'styled-components';

import Heading from '../components/atoms/Heading';
import CartContentTable from '../components/organisms/CartContentTable';
import CartSummary from '../components/molecules/CartSummary';
import Alert from '../components/atoms/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { successfulPaymentAlert } from '../actions';

const StyledOrderSummaryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const OrderSummaryPage = (props) => {
  const isSuccessfulPaymentAlert = useSelector(
    ({ successfulPaymentAlert }) => successfulPaymentAlert
  );
  const currentUser = useSelector(({ currentUser }) => currentUser);

  const dispatch = useDispatch();

  const order = props.location.state.cart;
  const totalPrice = props.location.state.totalPrice;

  useEffect(() => {
    setTimeout(() => {
      dispatch(successfulPaymentAlert(false));
    }, 2500);
  }, [dispatch]);

  return (
    <StyledOrderSummaryWrapper>
      <Heading
        type={'orderSummary'}
        heading={'ORDER SUMMARY'}
        headingDescription={`WE HOPE TO SEE YOU AGAIN!`}
      />
      <CartContentTable order={order} orderSummary />
      <CartSummary
        // variant="checkout"
        totalOrderPrice={totalPrice}
        orderSummary
      />
      <Alert
        severity="success"
        message="Payment successful!"
        visible={isSuccessfulPaymentAlert}
      />
    </StyledOrderSummaryWrapper>
  );
};

export default OrderSummaryPage;
