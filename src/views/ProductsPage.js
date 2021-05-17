import React, { useState, useCallback, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import CheckboxFiltersColumn from '../components/organisms/CheckboxFiltersColumn';
import Heading from '../components/atoms/Heading';
import ProductCard from '../components/molecules/ProductCard';
import Spinner from '../components/atoms/Spinner';

import { headingTypes } from '../helpers/atomsTypesAndVariants';
import { sortingOptions } from './utils/ProductsPageSortingOptions';

import {
  StyledProductsPageWrapper,
  StyledHeadingAndSortingWrapper,
  StyledSortingOptionChoice,
  StyledFilterIcon,
  StyledSelect,
  StyledProductsGridWrapper,
} from './styles/StyledProductsPage';

const ProductsPage = ({ history }) => {
  const [productsToDisplay, setProductsToDisplay] = useState(null);
  const [sortingOption, setSortingOption] = useState(sortingOptions.new.value);
  const [mobileFiltersColumnToggle, setMobileFiltersColumnToggle] =
    useState(false);
  const [preSetFilters, setPreSetFilters] = useState(null);
  const [areAnyFiltersSet, setAreAnyFiltersSet] = useState(false);

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  useEffect(() => {
    if (history.location.state) setPreSetFilters(history.location.state);
  }, []);

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

      default:
        return;
    }
  };

  const filteredProductsHandler = useCallback(
    (filteredProducts) => {
      const sortedProducts = sortProducts(filteredProducts);

      setProductsToDisplay(sortedProducts);
    },
    [sortingOption]
  );

  const handleMobileFiltersColumn = () => {
    setMobileFiltersColumnToggle((prevState) => !prevState);
  };

  useEffect(() => {
    if (!isTablet) setMobileFiltersColumnToggle(false);
  }, [isTablet]);

  const renderSortingOptions = () => (
    <>
      {isTablet && (
        <div>
          <label htmlFor="size">
            {areAnyFiltersSet ? 'Edit set filters:' : 'Filter:'}
          </label>
          <StyledFilterIcon
            areAnyFiltersSet={areAnyFiltersSet}
            onClick={handleMobileFiltersColumn}
          >
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
    </>
  );

  const renderProductsGrid = () => (
    <StyledProductsGridWrapper>
      {productsToDisplay ? (
        productsToDisplay.map((product) => (
          <ProductCard {...product} key={product.productId} />
        ))
      ) : (
        <Spinner
          isLoading={1}
          left={'50%'}
          top={'20px'}
          size={100}
          translateX={'-50%'}
          translateY={'0'}
        />
      )}
    </StyledProductsGridWrapper>
  );

  return (
    <>
      <StyledProductsPageWrapper>
        <CheckboxFiltersColumn
          onFilteredProducts={filteredProductsHandler}
          isTablet={mobileFiltersColumnToggle}
          onMobileClose={handleMobileFiltersColumn}
          preSetFilters={preSetFilters}
          onSetFilters={(areSet) => setAreAnyFiltersSet(areSet)}
        />
        {!mobileFiltersColumnToggle && (
          <div>
            <StyledHeadingAndSortingWrapper>
              <Heading
                type={isTablet ? '' : headingTypes.productsPage}
                heading={'all products'}
                headingDescription={'all currently available cleats'}
              />
              <StyledSortingOptionChoice>
                {renderSortingOptions()}
              </StyledSortingOptionChoice>
            </StyledHeadingAndSortingWrapper>
            {renderProductsGrid()}
          </div>
        )}
      </StyledProductsPageWrapper>
    </>
  );
};

export default ProductsPage;
