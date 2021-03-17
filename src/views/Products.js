import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
// import { routes } from '../routes';
import styled from 'styled-components';

import Heading from '../components/atoms/Heading';
import ProductCard from '../components/molecules/ProductCard';
import CheckboxFiltersColumn from '../components/organisms/CheckboxFiltersColumn';

const StyledProductsPageWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 10px;
  justify-content: space-between;
  margin: 40px 0 40px auto;
  width: 90%;

  /* border: 1px solid black; */
`;

const Products = () => {
  const availableProducts = useSelector(({ products }) => products);
  const [productsToDisplay, setProductsToDisplay] = useState(availableProducts);

  const filteredProductsHandler = useCallback((filteredProducts) => {
    setProductsToDisplay(filteredProducts);
    // console.log(filteredProducts);
  }, []);

  return (
    <>
      <Heading
        // type={'specialOffer'}
        heading={'adidas'}
        headingDescription={'all available adidas cleats'}
      />
      <StyledProductsPageWrapper>
        <CheckboxFiltersColumn onFilteredProducts={filteredProductsHandler} />
        <StyledProductsWrapper>
          {productsToDisplay.map((product) => (
            <ProductCard {...product} key={product.productId} />
          ))}
        </StyledProductsWrapper>
      </StyledProductsPageWrapper>
    </>
  );
};

export default Products;
