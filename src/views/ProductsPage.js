import React, { useState, useCallback, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import { sortingOptions } from './utils/ProductsPageSortingOptions';
import Heading from '../components/atoms/Heading';
import ProductCard from '../components/molecules/ProductCard';
import CheckboxFiltersColumn from '../components/organisms/CheckboxFiltersColumn';
import {
  StyledProductsPageWrapper,
  StyledHeadingAndSortingWrapper,
  StyledSortingOptionChoice,
  StyledFilterIcon,
  StyledSelect,
  StyledProductsGridWrapper,
} from './styles/StyledProductsPage';
import Spinner from '../components/atoms/Spinner';

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

      default:
        return;
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

  useEffect(() => {
    if (!isTablet) setMobileFiltersColumnToggle(false);
  }, [isTablet]);

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
          </div>
        )}
      </StyledProductsPageWrapper>
    </>
  );
};

export default ProductsPage;
