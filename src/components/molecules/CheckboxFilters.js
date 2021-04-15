import React from 'react';
import { useSelector } from 'react-redux';

import { StyledCheckboxesWrapper } from './styles/StyledCheckboxFilters';

const CheckboxFilters = ({ onSetFilter, filterName, filterCategory }) => {
  const availableProducts = useSelector(
    ({ productsAndCart }) => productsAndCart.products
  );

  const allfilterCategoryValues = availableProducts.map(
    (product) => product[filterCategory]
  );

  const uniqueFilterValues = Array.from(new Set(allfilterCategoryValues));

  const checkboxGroup = uniqueFilterValues.map((filterValue, index) => (
    <div key={`${filterCategory}-${index}`}>
      <input
        onChange={(e) =>
          onSetFilter(e.target.checked, filterValue, filterCategory)
        }
        type="checkbox"
        id={`${filterCategory}-${index}`}
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
