import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import CartContentTable from '../components/organisms/CartContentTable';
import CartSummary from '../components/molecules/CartSummary';
import Heading from '../components/atoms/Heading';

import { headingTypes } from '../helpers/atomsTypesAndVariants';

import { StyledCommonPageWrapper } from './styles/StyledCommonElements';

const CartPage = () => {
  const cartCounter = useSelector(
    ({ productsAndCart }) => productsAndCart.counter
  );

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <StyledCommonPageWrapper>
      <Heading
        type={
          isTablet ? headingTypes.mobileTopHeading : headingTypes.topHeading
        }
        heading={'CART'}
        headingDescription={`YOU'VE GOT ${cartCounter} PRODUCT${
          cartCounter > 1 ? 'S' : ''
        } IN YOUR CART`}
      />
      <CartContentTable />
      <CartSummary />
    </StyledCommonPageWrapper>
  );
};

export default CartPage;
