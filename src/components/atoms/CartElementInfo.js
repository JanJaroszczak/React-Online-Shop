import React from 'react';
import styled, { css } from 'styled-components';

const StyledImg = styled.img`
  align-self: center;
  width: 100%;

  ${({ searchModal }) =>
    searchModal &&
    css`
      margin-left: 10px;
    `}
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

    /* border: 1px solid black; */

    ${({ searchModal }) =>
      searchModal &&
      css`
        margin-left: 10px;

        margin-bottom: 0;
      `}
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.gray};

    /* border: 1px solid black; */
  }
`;

const CartElementInfo = ({ product, searchModal }) => {
  return (
    <>
      <StyledImg
        src={product.productImage[0]}
        alt={''}
        searchModal={searchModal}
      />
      <StyledProductInfo searchModal={searchModal}>
        {searchModal ? (
          <h3>{`${product.productBrand} ${product.productName}`}</h3>
        ) : (
          <h3>
            {product.productName} (Size: {product.chosenOption.size})
          </h3>
        )}
        {searchModal ? null : (
          <span>
            {product.chosenOption.quantity}x ${product.productPrice}
          </span>
        )}
      </StyledProductInfo>
    </>
  );
};

export default CartElementInfo;
