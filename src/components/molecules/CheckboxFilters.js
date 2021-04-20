import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { StyledCheckboxesWrapper } from './styles/StyledCheckboxFilters';

const CheckboxFilters = ({
  onSetFilter,
  filterName,
  filterCategory,
  areAllFiltersCleared,
  preSetFilters,
}) => {
  const [isCheckedArray, setIsCheckedArray] = useState([]);

  const availableProducts = useSelector(
    ({ productsAndCart }) => productsAndCart.products
  );

  useEffect(() => {
    console.log('zmiana areAllFiltersCleared');
    console.log(areAllFiltersCleared);
    if (areAllFiltersCleared) {
      setIsCheckedArray([]);
    }
  }, [areAllFiltersCleared]);

  const allfilterCategoryValues = availableProducts.map(
    (product) => product[filterCategory]
  );

  const uniqueFilterValues = Array.from(new Set(allfilterCategoryValues));

  useEffect(() => {
    window.history.replaceState({}, '');
  }, []);

  useEffect(() => {
    if (preSetFilters && preSetFilters.category === filterCategory) {
      uniqueFilterValues.forEach((filterValue, index) => {
        if (
          preSetFilters.values.includes(filterValue) &&
          !isCheckedArray.includes(index)
        ) {
          setIsCheckedArray([...isCheckedArray, index]);
        }
      });
    }
  }, [preSetFilters]);

  const checkboxGroup = uniqueFilterValues.map((filterValue, index) => (
    <div key={`${filterCategory}-${index}`}>
      <input
        onChange={(e) => {
          onSetFilter(e.target.checked, filterValue, filterCategory);
          if (e.target.checked) setIsCheckedArray([...isCheckedArray, index]);
          else
            setIsCheckedArray((prevState) =>
              prevState.filter((arrayItem) => arrayItem !== index)
            );
        }}
        type="checkbox"
        id={`${filterCategory}-${index}`}
        checked={isCheckedArray.includes(index)}
      />
      <label htmlFor={`${filterCategory}-${index}`}>{filterValue}</label>
    </div>
  ));

  return (
    <>
      <StyledCheckboxesWrapper className="boxes">
        <h3>{filterName}</h3>
        {checkboxGroup}
      </StyledCheckboxesWrapper>
    </>
  );
};

export default CheckboxFilters;
