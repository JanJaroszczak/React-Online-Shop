import React from 'react';
import { Link } from 'react-router-dom';

import {
  StyledDiv,
  StyledModelName,
  StyledBrandName,
  StyledPrice,
} from './styles/StyledProductInfo';
import './styles/stylesProductInfo.css';

const ProductInfo = ({ model, brand, price, productId }) => {
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
        £<span>{price.toFixed(2)}</span>
      </StyledPrice>
    </StyledDiv>
  );
};

export default ProductInfo;
