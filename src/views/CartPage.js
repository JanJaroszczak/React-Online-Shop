import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import Heading from '../components/atoms/Heading';
import CartContentTable from '../components/organisms/CartContentTable';
import CartSummary from '../components/molecules/CartSummary';

const StyledCartWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CartPage = () => {
  const cartCounter = useSelector(({ counter }) => counter);

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <StyledCartWrapper>
      <Heading
        type={isMobile ? 'mobileTopHeading' : 'topHeading'}
        heading={'CART'}
        headingDescription={`YOU'VE GOT ${cartCounter} PRODUCTS IN YOUR CART`}
      />
      <CartContentTable />
      <CartSummary />
    </StyledCartWrapper>
  );
};

export default CartPage;
