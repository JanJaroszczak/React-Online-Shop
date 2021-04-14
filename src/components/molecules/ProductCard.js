import React from 'react';

import ProductImage from '../atoms/ProductImage';
import ProductInfo from '../atoms/ProductInfo';
import { StyledDiv } from './styles/StyledProductCard';

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
