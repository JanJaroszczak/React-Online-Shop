import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import ClientDataForm from '../components/molecules/ClientDataForm';
import CartSummary from '../components/molecules/CartSummary';

const StyledCheckoutPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  margin: 0px auto;

  /* border: 1px solid black; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

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
