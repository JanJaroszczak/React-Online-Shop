import React from 'react';
import styled from 'styled-components';

import ClientDataForm from '../components/molecules/ClientDataForm';
import CartSummary from '../components/molecules/CartSummary';

const StyledCheckoutPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  margin: 0px auto;

  /* border: 1px solid black; */
`;

const CheckoutPage = () => {
  return (
    <div>
      <StyledCheckoutPageWrapper>
        <ClientDataForm />
        <CartSummary variant="checkout" />
      </StyledCheckoutPageWrapper>
    </div>
  );
};

export default CheckoutPage;