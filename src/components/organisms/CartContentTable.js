import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import CartContentTableRow from '../molecules/CartContentTableRow';

const StyledTable = styled.table`
  display: grid;
  border-collapse: collapse;
  grid-template-columns: minmax(400px, 1fr) minmax(200px, auto) minmax(
      170px,
      auto
    );
  margin-top: 40px;

  thead,
  tbody,
  tr {
    display: contents;
  }

  th,
  td {
    padding: 15px;
    /* overflow: hidden; */
    text-overflow: ellipsis;
    white-space: nowrap;

    /* border: 1px solid black; */
  }

  th {
    /* position: sticky; */
    top: 0;
    background-color: ${({ theme }) => theme.colors.mainWhite};
    text-align: left;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizes.s};

    color: black;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  td {
    padding-top: 10px;
    padding-bottom: 10px;
    color: #808080;
  }
`;

const CartContentTable = ({ order, orderSummary }) => {
  const cartProducts = useSelector(({ cart }) => cart);

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
      <StyledTable>
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
