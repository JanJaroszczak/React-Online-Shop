import React from 'react';
import { useSelector } from 'react-redux';

import PhotoCarousel from '../components/molecules/PhotoCarousel';
import ProductPageInfo from '../components/molecules/ProductPageInfo';

import { StyledProductWrapper } from './styles/StyledProductPage';

const ProductPage = ({ match }) => {
  const availableProducts = useSelector(
    ({ productsAndCart }) => productsAndCart.products
  );

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
