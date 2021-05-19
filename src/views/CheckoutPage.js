import React from 'react';
import { useMediaQuery } from 'react-responsive';

import CartSummary from '../components/molecules/CartSummary';
import ClientDataForm from '../components/molecules/ClientDataForm';

import { cartSummaryVariants } from '../helpers/atomsTypesAndVariants';
import { mediaQueryStrings } from '../helpers/mediaQueryStrings';

import { StyledCheckoutPageWrapper } from './styles/StyledCheckoutPage';

const CheckoutPage = () => {
  const isTablet = useMediaQuery({
    query: mediaQueryStrings.max768,
  });

  return (
    <div>
      <StyledCheckoutPageWrapper>
        {isTablet && <CartSummary variant={cartSummaryVariants.checkout} />}
        <ClientDataForm />
        {!isTablet && <CartSummary variant={cartSummaryVariants.checkout} />}
      </StyledCheckoutPageWrapper>
    </div>
  );
};

export default CheckoutPage;
