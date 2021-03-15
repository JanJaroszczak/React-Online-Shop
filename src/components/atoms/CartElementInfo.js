import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  align-self: center;
  width: 100%;
`;

const StyledProductInfo = styled.div`
  align-self: center;
  padding-left: 15px;
  /* border: 1px solid black; */

  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.mainDark};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    margin-bottom: 24px;
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const CartElementInfo = ({ product }) => {
  return (
    <>
      <StyledImg src={product.productImage[0]} alt={''} />
      <StyledProductInfo>
        <h3>
          {product.productName} (Size: {product.chosenOption.size})
        </h3>
        <span>
          {product.chosenOption.quantity}x ${product.productPrice}
        </span>
      </StyledProductInfo>
    </>
  );
};

export default CartElementInfo;
