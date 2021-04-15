import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Button from '../atoms/Button';

import CheckboxFilters from '../molecules/CheckboxFilters';
import {
  StyledColumn,
  StyledColumnTitle,
  StyledPriceFilter,
} from './styles/StyledCheckboxFiltersColumn';

const CheckboxFiltersColumn = ({
  onFilteredProducts,
  isTablet,
  onMobileClose,
}) => {
  const availableProducts = useSelector(
    ({ productsAndCart }) => productsAndCart.products
  );

  const [bottomFilterPrice, setBottomFilterPrice] = useState('');
  const [upperFilterPrice, setUpperFilterPrice] = useState('');
  const [markedCheckboxFilters, setMarkedCheckboxFilters] = useState([]);
  const inputRefBottomPrice = useRef();
  const inputRefUpperPrice = useRef();

  const setCheckboxFilter = (isChecked, filterValue, filterCategory) => {
    if (isChecked) {
      setMarkedCheckboxFilters(
        markedCheckboxFilters.concat({
          filterCategory,
          filterValue,
        })
      );
    } else {
      setMarkedCheckboxFilters(
        markedCheckboxFilters.filter(
          (filter) =>
            filter.filterValue.concat(filter.filterCategory) !==
            filterValue.concat(filterCategory)
        )
      );
    }
  };

  const filterCategories = React.useMemo(
    () => ['productBrand', 'productFamily', 'productCategory', 'productColor'],
    []
  );

  const allCheckboxFiltersToDisplay = filterCategories.map((category) => (
    <CheckboxFilters
      key={category}
      onSetFilter={setCheckboxFilter}
      filterName={category.substring(7)}
      filterCategory={category}
    />
  ));

  const setPriceFilter = useCallback(
    (allCheckboxFilteredProducts) => {
      let currentCondition = null;

      const allCheckboxAndPriceFilteredProducts = allCheckboxFilteredProducts.filter(
        (product) => {
          bottomFilterPrice && upperFilterPrice
            ? (currentCondition =
                product.productPrice >= bottomFilterPrice &&
                product.productPrice <= upperFilterPrice)
            : bottomFilterPrice
            ? (currentCondition = product.productPrice >= bottomFilterPrice)
            : upperFilterPrice
            ? (currentCondition = product.productPrice <= upperFilterPrice)
            : (currentCondition = product.productPrice > 0);

          return currentCondition;
        }
      );
      onFilteredProducts(allCheckboxAndPriceFilteredProducts);
    },
    [bottomFilterPrice, upperFilterPrice, onFilteredProducts]
  );

  const updateProductsToDisplay = useCallback(() => {
    if (markedCheckboxFilters.length === 0) {
      setPriceFilter(availableProducts);
    } else {
      let allCheckboxFilteredProducts = [];
      markedCheckboxFilters.forEach((filter) => {
        const checkboxFilterOn = availableProducts.filter(
          (product) => product[filter.filterCategory] === filter.filterValue
        );

        const checkboxFilterOnWithoutDuplicates = checkboxFilterOn.filter(
          (product) => !allCheckboxFilteredProducts.includes(product)
        );

        allCheckboxFilteredProducts.push(...checkboxFilterOnWithoutDuplicates);
      });

      filterCategories.forEach((category) => {
        let selectedValuesInCategory = [];

        markedCheckboxFilters.forEach((filter) => {
          if (category === filter.filterCategory) {
            selectedValuesInCategory.push(filter.filterValue);
          }
        });

        if (selectedValuesInCategory.length > 0) {
          allCheckboxFilteredProducts = allCheckboxFilteredProducts.filter(
            (product) => selectedValuesInCategory.includes(product[category])
          );
        }
      });

      setPriceFilter(allCheckboxFilteredProducts);
    }
  }, [
    availableProducts,
    markedCheckboxFilters,
    filterCategories,
    setPriceFilter,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (bottomFilterPrice === inputRefBottomPrice.current.value) {
        updateProductsToDisplay();
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [
    markedCheckboxFilters,
    bottomFilterPrice,
    inputRefBottomPrice,
    updateProductsToDisplay,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (upperFilterPrice === inputRefUpperPrice.current.value) {
        updateProductsToDisplay();
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [
    markedCheckboxFilters,
    upperFilterPrice,
    inputRefUpperPrice,
    updateProductsToDisplay,
  ]);

  return (
    <StyledColumn isTablet={isTablet}>
      <StyledColumnTitle>FILTER PRODUCTS:</StyledColumnTitle>
      {allCheckboxFiltersToDisplay}
      <StyledPriceFilter>
        <h3>Price</h3>
        <label htmlFor="priceFrom">From:</label>
        <input
          ref={inputRefBottomPrice}
          type="number"
          id="priceFrom"
          value={bottomFilterPrice}
          onChange={(e) => {
            setBottomFilterPrice(e.target.value);
          }}
        />
        <label htmlFor="priceTo">To:</label>
        <input
          ref={inputRefUpperPrice}
          type="text"
          id="priceTo"
          value={upperFilterPrice}
          onChange={(e) => {
            setUpperFilterPrice(e.target.value);
          }}
        />
      </StyledPriceFilter>
      {isTablet && (
        <Button
          type="submit"
          label="apply chosen filters"
          variant="mobile"
          clicked={onMobileClose}
        />
      )}
    </StyledColumn>
  );
};

export default CheckboxFiltersColumn;
