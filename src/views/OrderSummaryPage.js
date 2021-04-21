import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import Alert from '../components/atoms/Alert';
import Button from '../components/atoms/Button';
import CartContentTable from '../components/organisms/CartContentTable';
import CartSummary from '../components/molecules/CartSummary';
import Heading from '../components/atoms/Heading';

import {
  alertVariants,
  buttonVariants,
  headingTypes,
} from '../utils/atomsTypesAndVariants';
import { routes } from '../routes';
import { successfulPaymentAlert, clearCart } from '../actions';

import { StyledCommonPageWrapper } from './styles/StyledCommonElements';
import { StyledLink } from './styles/StyledOrderSummaryPage';

const OrderSummaryPage = (props) => {
  const isSuccessfulPaymentAlert = useSelector(
    ({ paymentAlert }) => paymentAlert.successfulPaymentAlert
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
    <StyledCommonPageWrapper>
      {isSuccessfulPaymentAlert ? (
        <Alert
          severity="success"
          message="Payment successful!"
          visible={isSuccessfulPaymentAlert}
          variant={alertVariants.orderSummary}
        />
      ) : (
        <>
          <Heading
            type={
              isTablet ? headingTypes.mobileTopHeading : headingTypes.topHeading
            }
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
              variant={buttonVariants.noCapitalize}
              type="button"
              label="Go to Home Page"
            />
          </StyledLink>
        </>
      )}
    </StyledCommonPageWrapper>
  );
};

export default OrderSummaryPage;
