import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Heading from '../components/atoms/Heading';
import ProductCard from '../components/molecules/ProductCard';

const StyledProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 10px;
  justify-content: space-between;
  margin: 60px auto;
  max-width: 1200px;
  width: 90%;
`;

const Products = () => {
  const selectedProducts = useSelector(({ products }) => products);

  return (
    <>
      <Heading
        // type={'specialOffer'}
        heading={'adidas'}
        headingDescription={'all available adidas cleats'}
      />
      <StyledProductsWrapper>
        {selectedProducts.map((product) => (
          <ProductCard {...product} key={product.productId} />
        ))}
      </StyledProductsWrapper>
    </>
  );
};

export default Products;
