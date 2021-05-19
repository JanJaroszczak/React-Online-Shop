import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import Alert from '../components/atoms/Alert';
import Button from '../components/atoms/Button';
import CartContentTable from '../components/organisms/CartContentTable';
import CartSummary from '../components/molecules/CartSummary';
import Heading from '../components/atoms/Heading';

import { alertMessages } from '../helpers/alertMessages';
import {
  alertVariants,
  buttonVariants,
  headingTypes,
} from '../helpers/atomsTypesAndVariants';
import { buttonLabels } from '../helpers/buttonLabels';
import { mediaQueryStrings } from '../helpers/mediaQueryStrings';
import { routes } from '../routes';
import { successfulPaymentAlert, clearCart } from '../actions';

import { StyledCommonPageWrapper } from './styles/StyledCommonElements';
import { StyledLink } from './styles/StyledOrderSummaryPage';

const OrderSummaryPage = (props) => {
  const isSuccessfulPaymentAlert = useSelector(
    ({ paymentAlert }) => paymentAlert.successfulPaymentAlert
  );

  const isTablet = useMediaQuery({
    query: mediaQueryStrings.max768,
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
          message={alertMessages.paymentSuccessful}
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
          <CartSummary totalOrderPrice={totalPrice} orderSummary />
          <StyledLink to={routes.home}>
            <Button
              variant={buttonVariants.noCapitalize}
              type="button"
              label={buttonLabels.goToHomePage}
            />
          </StyledLink>
        </>
      )}
    </StyledCommonPageWrapper>
  );
};

export default OrderSummaryPage;
