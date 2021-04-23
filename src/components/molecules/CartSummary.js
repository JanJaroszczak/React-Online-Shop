import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { cartSummaryVariants } from '../../helpers/atomsTypesAndVariants';
import { routes } from '../../routes';

import {
  StyledCartSummary,
  StyledCartSummaryHeading,
  StyledListElement,
  StyledButton,
} from './styles/StyledCartSummary';
import { StyledCommonLink } from '../../globalStyles/GlobalStyledComponents';

const CartSummary = ({ variant, totalOrderPrice, orderSummary }) => {
  const totalPrice = useSelector(
    ({ productsAndCart }) => productsAndCart.totalPrice
  );
  const currentUser = useSelector(({ user }) => user.currentUser);

  return (
    <StyledCartSummary variant={variant} orderSummary={orderSummary}>
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
      {variant !== cartSummaryVariants.checkout && !orderSummary && (
        <StyledCommonLink
          to={currentUser ? routes.checkout : routes.authbeforecheckout}
        >
          <StyledButton type="button">CHECKOUT</StyledButton>
        </StyledCommonLink>
      )}
    </StyledCartSummary>
  );
};

export default CartSummary;
