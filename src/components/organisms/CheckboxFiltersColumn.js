import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import Button from '../atoms/Button';
import CheckboxFilters from '../molecules/CheckboxFilters';

import {
  StyledColumn,
  StyledColumnHeading,
  StyledPriceFilter,
} from './styles/StyledCheckboxFiltersColumn';
import { StyledCheckboxesWrapper } from '../molecules/styles/StyledCheckboxFilters';

const CheckboxFiltersColumn = ({
  onFilteredProducts,
  isTablet,
  onMobileClose,
  preSetFilters,
  onSetFilters,
}) => {
  const availableProducts = useSelector(
    ({ productsAndCart }) => productsAndCart.products
  );

  const isTabletButton = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const [bottomFilterPrice, setBottomFilterPrice] = useState('');
  const [upperFilterPrice, setUpperFilterPrice] = useState('');
  const [markedCheckboxFilters, setMarkedCheckboxFilters] = useState([]);
  const [areAllFiltersCleared, setAreAllFiltersCleared] = useState(false);
  const [isSaleFilterChecked, setIsSaleFilterChecked] = useState(false);
  const [areAnyFiltersSet, setAreAnyFiltersSet] = useState(false);
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
      setAreAllFiltersCleared(false);
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
    () => [
      'productBrand',
      'productFamily',
      'productCategory',
      'productColor',
      'extraState',
    ],
    []
  );

  const allCheckboxFiltersToDisplay = filterCategories.map((category) => {
    if (category !== 'extraState')
      return (
        <CheckboxFilters
          key={category}
          onSetFilter={setCheckboxFilter}
          filterName={category.substring(7)}
          filterCategory={category}
          areAllFiltersCleared={areAllFiltersCleared}
          preSetFilters={preSetFilters}
        />
      );
  });

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

  const clearFilters = () => {
    setBottomFilterPrice('');
    setUpperFilterPrice('');
    setMarkedCheckboxFilters([]);
    setAreAllFiltersCleared(true);
    setIsSaleFilterChecked(false);
  };

  const saleFilterClicked = (e) => {
    setCheckboxFilter(e.target.checked, 'sale', 'extraState');
    setIsSaleFilterChecked((prevState) => !prevState);
    if (isSaleFilterChecked) setAreAllFiltersCleared(false);
  };

  useEffect(() => {
    if (
      preSetFilters &&
      preSetFilters.category &&
      preSetFilters.values &&
      preSetFilters.values.length > 0
    ) {
      setCheckboxFilter(true, preSetFilters.values[0], preSetFilters.category);
    } else if (preSetFilters && preSetFilters.category === 'sale') {
      setCheckboxFilter(true, 'sale', 'extraState');
      setIsSaleFilterChecked((prevState) => !prevState);
    }
  }, [preSetFilters]);

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

  useEffect(() => {
    if (
      bottomFilterPrice ||
      upperFilterPrice ||
      markedCheckboxFilters.length > 0
    ) {
      setAreAnyFiltersSet(true);
    } else {
      setAreAnyFiltersSet(false);
    }
  }, [bottomFilterPrice, upperFilterPrice, markedCheckboxFilters]);

  useEffect(() => {
    onSetFilters(areAnyFiltersSet);
  }, [areAnyFiltersSet]);

  const renderPriceFilter = () => (
    <>
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
    </>
  );

  const renderExtraStateFilters = () => (
    <>
      <h3>Others</h3>
      <input
        type="checkbox"
        id="extraState"
        checked={isSaleFilterChecked}
        onChange={(e) => saleFilterClicked(e)}
      />
      <label htmlFor="extraState">Sale</label>
    </>
  );

  return (
    <StyledColumn isTablet={isTablet}>
      <StyledColumnHeading>
        <h2>FILTERS</h2>
        <Button
          type="button"
          label="clear all filters"
          color={isTabletButton ? '' : 'white'}
          variant={areAnyFiltersSet ? 'clearFilters' : 'clearFiltersDisabled'}
          clicked={clearFilters}
        />
      </StyledColumnHeading>
      {allCheckboxFiltersToDisplay}
      <StyledCheckboxesWrapper className="boxes">
        {renderExtraStateFilters()}
      </StyledCheckboxesWrapper>
      <StyledPriceFilter>{renderPriceFilter()}</StyledPriceFilter>
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
