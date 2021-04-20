import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import Heading from '../components/atoms/Heading';
import ProductCard from '../components/molecules/ProductCard';
import searchProducts from '../utils/searchProducts';

import {
  StyledSearchPageWrapper,
  StyledInputWrapper,
  StyledSearchInput,
  StyledSearchButton,
  StyledProductsGridWrapper,
} from './styles/StyledMobileSearchPage';

const MobileSearchPage = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [foundProducts, setFoundProducts] = useState([]);

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const products = useSelector(
    ({ productsAndCart }) => productsAndCart.products
  );

  const filterProducts = () => {
    const filteredProducts = searchProducts(searchInputValue, products);

    if (filteredProducts) {
      const productToDisplay = filteredProducts.map((product) => (
        <ProductCard {...product} key={product.productId} />
      ));

      setFoundProducts(productToDisplay);
    }
  };

  const submitHandler = (e) => {
    console.log('submitted');
    e.preventDefault();
    setSearchInputValue('');
    filterProducts();
  };

  return (
    <StyledSearchPageWrapper>
      <Heading
        type={isTablet ? 'mobileTopHeading' : 'topSearchPageHeading'}
        heading={'SEARCH PANEL'}
        headingDescription={``}
      />
      <form onSubmit={submitHandler}>
        <StyledInputWrapper>
          <StyledSearchInput
            // autoFocus
            type="text"
            value={searchInputValue}
            onChange={(event) => {
              setSearchInputValue(event.target.value);
            }}
          />
          <StyledSearchButton type="submit">
            <i className="fas fa-search"></i>
          </StyledSearchButton>
        </StyledInputWrapper>
      </form>
      <StyledProductsGridWrapper>{foundProducts}</StyledProductsGridWrapper>
    </StyledSearchPageWrapper>
  );
};

export default MobileSearchPage;
