import React from 'react';

import {
  StyledDiv,
  StyledModelName,
  StyledBrandName,
  StyledPrice,
  StyledLink,
} from './styles/StyledProductInfo';

const ProductInfo = ({
  model,
  brand,
  price,
  productId,
  productPreviousPrice,
}) => {
  return (
    <StyledDiv>
      <StyledLink to={`/product/${productId}`}>
        <StyledModelName>{model}</StyledModelName>
      </StyledLink>
      <StyledBrandName>{brand}</StyledBrandName>
      <StyledPrice>
        $<span>{price.toFixed(2)}</span>
        <span className="previousPrice">
          {productPreviousPrice ? `$ ${productPreviousPrice.toFixed(2)}` : null}
        </span>
      </StyledPrice>
    </StyledDiv>
  );
};

export default ProductInfo;
