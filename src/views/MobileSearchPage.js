import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import searchProducts from '../utils/searchProducts';
import Heading from '../components/atoms/Heading';
import ProductCard from '../components/molecules/ProductCard';

const StyledSearchPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  max-width: 460px;
  margin: 0 auto;
  padding: 0 20px;

  /* border: 1px solid black; */
`;

const StyledSearchInput = styled.input`
  display: inline-block;
  height: 45px;
  min-width: 100px;
  max-width: 400px;
  padding: 0 5px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  border-radius: 7px;
  outline: none;

  border: 1px solid black;
`;

const StyledSearchButton = styled.button`
  align-self: center;
  margin-left: 15px;
  background-color: transparent;
  border: none;

  i {
    font-size: ${({ theme }) => theme.fontSizes.xl};

    /* border: 1px solid black; */
  }
`;

const StyledProductsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  row-gap: 10px;
  justify-content: center;
  margin: 30px auto 0;
  width: 90%;

  /* border: 1px solid black; */

  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: auto;
  }
`;

const MobileSearchPage = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [foundProducts, setFoundProducts] = useState([]);

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const products = useSelector(({ products }) => products);

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
