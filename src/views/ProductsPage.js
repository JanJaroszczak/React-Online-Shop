import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
// import { routes } from '../routes';
import styled from 'styled-components';

import { sortingOptions } from './utils/ProductsPageSortingOptions';
import Heading from '../components/atoms/Heading';
import ProductCard from '../components/molecules/ProductCard';
import CheckboxFiltersColumn from '../components/organisms/CheckboxFiltersColumn';

const StyledProductsPageWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledHeadingAndSortingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const StyledSortingOptionChoice = styled.div`
  margin: 60px 30px 20px 0;
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  /* border: 1px solid black; */
`;

const StyledSelect = styled.select`
  display: block;
  width: 135px;
  height: 40px;
  margin-top: 3px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-family: inherit;
  background-color: ${({ theme }) => theme.colors.declicateGray};
  color: ${({ theme }) => theme.colors.mainDark};
  border: none;
  outline: none;

  /* border: 1px solid black; */

  option {
    font-weight: inherit;
  }
`;

const StyledProductsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 10px;
  justify-content: space-between;
  margin: 40px 20px 40px 52px;

  /* border: 1px solid black; */
`;

const ProductsPage = () => {
  const [productsToDisplay, setProductsToDisplay] = useState(null);
  const [sortingOption, setSortingOption] = useState(sortingOptions.new.value);

  const selectOptions = Object.entries(sortingOptions).map((option) => (
    <option key={option[1].value} value={option[1].value}>
      {option[1].label}
    </option>
  ));

  const sortProducts = (filteredProducts) => {
    switch (sortingOption) {
      case sortingOptions.new.value:
        return filteredProducts.sort(
          (a, b) => b.addedDate.seconds - a.addedDate.seconds
        );

      case sortingOptions.old.value:
        return filteredProducts.sort(
          (a, b) => a.addedDate.seconds - b.addedDate.seconds
        );

      case sortingOptions.lowPrice.value:
        return filteredProducts.sort((a, b) => a.productPrice - b.productPrice);

      case sortingOptions.highPrice.value:
        return filteredProducts.sort((a, b) => b.productPrice - a.productPrice);
    }
  };

  const filteredProductsHandler = useCallback(
    (filteredProducts) => {
      console.log(filteredProducts);

      const sortedProducts = sortProducts(filteredProducts);

      setProductsToDisplay(sortedProducts);
    },
    [sortingOption]
  );

  return (
    <>
      <StyledProductsPageWrapper>
        <CheckboxFiltersColumn onFilteredProducts={filteredProductsHandler} />
        <div>
          <StyledHeadingAndSortingWrapper>
            <Heading
              type={'productsPage'}
              heading={'all products'}
              headingDescription={'all currently available cleats'}
            />
            <StyledSortingOptionChoice>
              <label htmlFor="size">Sort:</label>
              <StyledSelect
                id="size"
                value={sortingOption}
                onChange={(e) => {
                  setSortingOption(e.target.value);
                }}
              >
                {selectOptions}
              </StyledSelect>
            </StyledSortingOptionChoice>
          </StyledHeadingAndSortingWrapper>
          <StyledProductsGridWrapper>
            {productsToDisplay &&
              productsToDisplay.map((product) => (
                <ProductCard {...product} key={product.productId} />
              ))}
          </StyledProductsGridWrapper>
        </div>
      </StyledProductsPageWrapper>
    </>
  );
};

export default ProductsPage;
