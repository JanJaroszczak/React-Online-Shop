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
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <div>
      <StyledCheckoutPageWrapper>
        {isMobile && <CartSummary variant="checkout" />}
        <ClientDataForm />
        {!isMobile && <CartSummary variant="checkout" />}
      </StyledCheckoutPageWrapper>
    </div>
  );
};

export default CheckoutPage;
