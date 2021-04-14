import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledDiv,
  StyledModelName,
  StyledBrandName,
  StyledPrice,
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
      <Link
        to={`/product/${productId}`}
        style={{ textDecoration: 'none', color: '#222' }}
      >
        <StyledModelName>{model}</StyledModelName>
      </Link>
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
