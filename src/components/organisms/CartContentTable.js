import React from 'react';
import { useSelector } from 'react-redux';

import CartContentTableRow from '../molecules/CartContentTableRow';

import { StyledTable } from './styles/StyledCartContentTable';

const CartContentTable = ({ order, orderSummary }) => {
  const cartProducts = useSelector(
    ({ productsAndCart }) => productsAndCart.cart
  );

  const cartContentRows = cartProducts.map((product) => (
    <CartContentTableRow product={product} key={product.cartProductId} />
  ));

  let orderContentRows = null;

  if (orderSummary) {
    orderContentRows = order.map((product, index) => (
      <CartContentTableRow
        product={product}
        key={`${product.productId}_${index}`}
        orderRow
      />
    ));
  }

  return (
    <>
      <StyledTable orderSummary={orderSummary}>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>{orderSummary ? orderContentRows : cartContentRows}</tbody>
      </StyledTable>
    </>
  );
};

export default CartContentTable;
