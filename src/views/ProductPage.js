import React from 'react';
import styled from 'styled-components';

import PhotoCarousel from '../components/molecules/PhotoCarousel';
import ProductPageInfo from '../components/molecules/ProductPageInfo';

const StyledProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 10px;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;

  /* border: 1px solid black; */
`;

const ProductPage = ({ match }) => {
  return (
    <StyledProductWrapper>
      <PhotoCarousel id={match.params.productId} />
      <ProductPageInfo id={match.params.productId} />
    </StyledProductWrapper>
  );
};

export default ProductPage;
