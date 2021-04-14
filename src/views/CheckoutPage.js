import React from 'react';
import { useMediaQuery } from 'react-responsive';

import ClientDataForm from '../components/molecules/ClientDataForm';
import CartSummary from '../components/molecules/CartSummary';
import { StyledCheckoutPageWrapper } from './styles/StyledCheckoutPage';

const CheckoutPage = () => {
  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <div>
      <StyledCheckoutPageWrapper>
        {isTablet && <CartSummary variant="checkout" />}
        <ClientDataForm />
        {!isTablet && <CartSummary variant="checkout" />}
      </StyledCheckoutPageWrapper>
    </div>
  );
};

export default CheckoutPage;
