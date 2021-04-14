import React from 'react';
import styled from 'styled-components';

import ProductImage from '../atoms/ProductImage';
import ProductInfo from '../atoms/ProductInfo';

const StyledDiv = styled.div`
  max-width: 320px;
  margin: 17px 10px;

  /* border: 1px solid black; */
`;

const ProductCard = ({
  productName,
  productBrand,
  productPrice,
  productImage,
  productId,
  productPreviousPrice,
  extraState,
}) => {
  return (
    <StyledDiv>
      <ProductImage
        img={productImage[0]}
        productId={productId}
        productPrice={productPrice}
        productPreviousPrice={productPreviousPrice}
        extraState={extraState}
      />
      <ProductInfo
        model={productName}
        brand={productBrand}
        price={productPrice}
        productId={productId}
        productPreviousPrice={productPreviousPrice}
      />
    </StyledDiv>
  );
};

export default ProductCard;
