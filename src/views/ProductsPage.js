import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { sortingOptions } from './utils/ProductsPageSortingOptions';
import Heading from '../components/atoms/Heading';
import ProductCard from '../components/molecules/ProductCard';
import CheckboxFiltersColumn from '../components/organisms/CheckboxFiltersColumn';

const StyledProductsPageWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  } ;
`;

const StyledHeadingAndSortingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  /* border: 1px solid black; */

  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  } ;
`;

const StyledSortingOptionChoice = styled.div`
  margin: 60px 30px 20px 0;
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  /* border: 1px solid black; */

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 50px;
    margin: 0 auto;
  } ;
`;

const StyledFilterIcon = styled.div`
  /* margin-top: 2px; */
  font-size: 4.1rem;
  color: ${({ theme }) => theme.colors.declicateGray};

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

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;

    margin: 30px auto 0;
    width: 90%;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 630px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: auto;
  } ;
`;

const ProductsPage = () => {
  const [productsToDisplay, setProductsToDisplay] = useState(null);
  const [sortingOption, setSortingOption] = useState(sortingOptions.new.value);
  const [mobileFiltersColumnToggle, setMobileFiltersColumnToggle] = useState(
    false
  );

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

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

  const handleMobileFiltersColumn = () => {
    setMobileFiltersColumnToggle((prevState) => !prevState);
  };

  return (
    <>
      <StyledProductsPageWrapper>
        <CheckboxFiltersColumn
          onFilteredProducts={filteredProductsHandler}
          isTablet={mobileFiltersColumnToggle}
          onMobileClose={handleMobileFiltersColumn}
        />
        {!mobileFiltersColumnToggle && (
          <div>
            <StyledHeadingAndSortingWrapper>
              <Heading
                type={isTablet ? 'mobile' : 'productsPage'}
                heading={'all products'}
                headingDescription={'all currently available cleats'}
              />
              <StyledSortingOptionChoice>
                {isTablet && (
                  <div>
                    <label htmlFor="size">Filter:</label>
                    <StyledFilterIcon onClick={handleMobileFiltersColumn}>
                      <i className="fas fa-filter"></i>
                    </StyledFilterIcon>
                  </div>
                )}
                <div>
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
                </div>
              </StyledSortingOptionChoice>
            </StyledHeadingAndSortingWrapper>
            <StyledProductsGridWrapper>
              {productsToDisplay &&
                productsToDisplay.map((product) => (
                  <ProductCard {...product} key={product.productId} />
                ))}
            </StyledProductsGridWrapper>
          </div>
        )}
      </StyledProductsPageWrapper>
    </>
  );
};

export default ProductsPage;
