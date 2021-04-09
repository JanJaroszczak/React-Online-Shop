import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import PhotoCarousel from '../components/molecules/PhotoCarousel';
import ProductPageInfo from '../components/molecules/ProductPageInfo';

const StyledProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 10px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px 0;

  /* border: 1px solid black; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 0 10px;
    margin: 80px auto -30px;
  } ;
`;

const ProductPage = ({ match }) => {
  const availableProducts = useSelector(({ products }) => products);

  return (
    <StyledProductWrapper>
      {availableProducts.length > 0 && (
        <PhotoCarousel id={match.params.productId} />
      )}
      {availableProducts.length > 0 && (
        <ProductPageInfo
          products={availableProducts}
          id={match.params.productId}
        />
      )}
    </StyledProductWrapper>
  );
};

export default ProductPage;
