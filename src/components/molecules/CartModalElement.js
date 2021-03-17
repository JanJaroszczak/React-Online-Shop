import React from 'react';
import styled from 'styled-components';
import CartElementInfo from '../atoms/CartElementInfo';

const StyledCartElementWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px auto 80px;
  grid-template-rows: 100px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const StyledPrice = styled.div`
  align-self: center;
  justify-self: center;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  /* border: 1px solid black; */
`;

const CartModalElement = ({ product }) => {
  return (
    <StyledCartElementWrapper>
      <CartElementInfo product={product} />
      <StyledPrice>
        $ {product.chosenOption.quantity * product.productPrice}
      </StyledPrice>
    </StyledCartElementWrapper>
  );
};

export default CartModalElement;
