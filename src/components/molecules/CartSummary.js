import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { routes } from '../../routes';
import {
  StyledCartSummary,
  StyledCartSummaryHeading,
  StyledListElement,
  StyledButton,
} from './styles/StyledCartSummary';

const CartSummary = ({ variant, totalOrderPrice, orderSummary }) => {
  const totalPrice = useSelector(({ totalPrice }) => totalPrice);
  const currentUser = useSelector(({ currentUser }) => currentUser);

  return (
    <StyledCartSummary variant={variant}>
      <StyledCartSummaryHeading>
        {orderSummary ? 'COSTS DETAILS' : 'CART SUMMARY'}
      </StyledCartSummaryHeading>
      <ul>
        <StyledListElement>
          PRODUCTS
          <span>$ {orderSummary ? totalOrderPrice : totalPrice}</span>
        </StyledListElement>
        <StyledListElement>
          SHIPPING
          <span>$ 10</span>
        </StyledListElement>
        <StyledListElement total>
          TOTAL
          <span>$ {orderSummary ? totalOrderPrice + 10 : totalPrice + 10}</span>
        </StyledListElement>
      </ul>
      {variant !== 'checkout' && !orderSummary && (
        <Link
          to={currentUser ? routes.checkout : routes.authbeforecheckout}
          style={{ textDecoration: 'none' }}
        >
          <StyledButton type="button">CHECKOUT</StyledButton>
        </Link>
      )}
    </StyledCartSummary>
  );
};

export default CartSummary;
