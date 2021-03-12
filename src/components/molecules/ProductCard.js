import React from 'react';
import styled from 'styled-components';

import ProductImage from '../atoms/ProductImage';
import ProductInfo from '../atoms/ProductInfo';
import image from '../../assets/images/test_photo.jpg';

const StyledDiv = styled.div`
  max-width: 320px;
  margin: 17px 10px;

  /* border: 1px solid black; */
`;

const ProductCard = ({ image, productId, sizes }) => {
  return (
    <StyledDiv>
      <ProductImage img={image} circleInfo="sale" />
      <ProductInfo
        model="predator mutator"
        brand="adidas"
        price={129.0}
        productId={productId}
        sizes={sizes}
      />
    </StyledDiv>
  );
};

export default ProductCard;
