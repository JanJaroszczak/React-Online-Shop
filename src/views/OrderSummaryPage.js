import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { routes } from '../routes';
import Heading from '../components/atoms/Heading';
import CartContentTable from '../components/organisms/CartContentTable';
import CartSummary from '../components/molecules/CartSummary';
import Alert from '../components/atoms/Alert';
import { successfulPaymentAlert, clearCart } from '../actions';
import Button from '../components/atoms/Button';

const StyledOrderSummaryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const StyledLink = styled(Link)`
  @media (max-width: 768px) {
    display: block;
    margin-top: 30px;
  }
`;

const OrderSummaryPage = (props) => {
  const isSuccessfulPaymentAlert = useSelector(
    ({ successfulPaymentAlert }) => successfulPaymentAlert
  );

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const dispatch = useDispatch();

  const order = props.location.state.cart;
  const totalPrice = props.location.state.totalPrice;

  useEffect(() => {
    dispatch(clearCart());
    setTimeout(() => {
      dispatch(successfulPaymentAlert(false));
    }, 2000);
  }, []);

  return (
    <StyledOrderSummaryWrapper>
      {isSuccessfulPaymentAlert ? (
        <Alert
          severity="success"
          message="Payment successful!"
          visible={isSuccessfulPaymentAlert}
          variant="orderSummary"
        />
      ) : (
        <>
          <Heading
            type={isTablet ? 'mobileTopHeading' : 'topHeading'}
            heading={'ORDER SUMMARY'}
            headingDescription={`WE HOPE TO SEE YOU AGAIN!`}
          />
          <CartContentTable order={order} orderSummary />
          <CartSummary
            // variant="checkout"
            totalOrderPrice={totalPrice}
            orderSummary
          />
          <StyledLink to={routes.home} style={{ textDecoration: 'none' }}>
            <Button
              variant="noCapitalize"
              type="button"
              label="Go to Home Page"
            />
          </StyledLink>
        </>
      )}
    </StyledOrderSummaryWrapper>
  );
};

export default OrderSummaryPage;
