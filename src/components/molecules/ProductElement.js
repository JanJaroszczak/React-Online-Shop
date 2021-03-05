import React from 'react';
import styled from 'styled-components';

import ProductImage from '../atoms/ProductImage';
import ProductInfo from '../atoms/ProductInfo';
import image from '../../assets/images/test_photo.jpg';

const StyledDiv = styled.div`
  margin: 40px;
`;

const ProductElement = () => {
  return (
    <StyledDiv>
      <ProductImage img={image} circleInfo="sale" />
      <ProductInfo product="pocket watch" category="watches" price={29.0} />
    </StyledDiv>
  );
};

export default ProductElement;
