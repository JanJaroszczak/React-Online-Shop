import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { routes } from '../routes';
import Heading from '../components/atoms/Heading';
import CartContentTable from '../components/organisms/CartContentTable';
import CartSummary from '../components/molecules/CartSummary';
import Alert from '../components/atoms/Alert';
import { successfulPaymentAlert } from '../actions';
import Button from '../components/atoms/Button';

const StyledOrderSummaryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const OrderSummaryPage = (props) => {
  const isSuccessfulPaymentAlert = useSelector(
    ({ successfulPaymentAlert }) => successfulPaymentAlert
  );

  const dispatch = useDispatch();

  const order = props.location.state.cart;
  const totalPrice = props.location.state.totalPrice;

  useEffect(() => {
    setTimeout(() => {
      dispatch(successfulPaymentAlert(false));
    }, 3000);
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
      <Link to={routes.home} style={{ textDecoration: 'none' }}>
        <Button
          variant="noCapitalize"
          type="button"
          label="Go back to Home Page"
        />
      </Link>
      <Alert
        severity="success"
        message="Payment successful!"
        visible={isSuccessfulPaymentAlert}
      />
    </StyledOrderSummaryWrapper>
  );
};

export default OrderSummaryPage;
