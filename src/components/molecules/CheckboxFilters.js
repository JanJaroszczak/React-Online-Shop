import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { StyledCheckboxesWrapper } from './styles/StyledCheckboxFilters';

const CheckboxFilters = ({
  onSetFilter,
  filterName,
  filterCategory,
  areAllFiltersCleared,
}) => {
  // const [isChecked, setIsChecked] = useState(false);
  // const [checkboxGroupToRender, setCheckboxGroupToRender] = useState(null);
  const [isCheckedArray, setIsCheckedArray] = useState([]);

  const availableProducts = useSelector(
    ({ productsAndCart }) => productsAndCart.products
  );

  // const checkedToggle = (index) => {
  //   setIsCheckedArray((prevState) =>
  //     prevState.splice(index, 1, !prevState[index])
  //   );
  // };

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

  // console.log(allfilterCategoryValues);

  const uniqueFilterValues = Array.from(new Set(allfilterCategoryValues));

  // console.log(uniqueFilterValues);

  const isCheckedGroup = uniqueFilterValues.map((_) => false);

  // setIsCheckedArray(isCheckedGroup);

  // useEffect(() => {
  //   setIsCheckedArray(uniqueFilterValues.map((_) => false));
  // }, []);

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
        // checked={isCheckedArray[index]}
        checked={isCheckedArray.includes(index)}
        // onClick={() => checkedToggle(index)}
      />
      <label htmlFor={`${filterCategory}-${index}`}>{filterValue}</label>
    </div>
  ));

  // useEffect(() => {
  //   if (availableProducts) {
  //     const allfilterCategoryValues = availableProducts.map(
  //       (product) => product[filterCategory]
  //     );

  //     const uniqueFilterValues = Array.from(new Set(allfilterCategoryValues));
  //     const checkboxGroup = uniqueFilterValues.map((filterValue, index) => (
  //       <div key={`${filterCategory}-${index}`}>
  //         <input
  //           onChange={(e) =>
  //             onSetFilter(e.target.checked, filterValue, filterCategory)
  //           }
  //           type="checkbox"
  //           id={`${filterCategory}-${index}`}
  //           checked={isCheckedArray[index]}
  //           onClick={() => checkedToggle(index)}
  //         />
  //         <label htmlFor={`${filterCategory}-${index}`}>{filterValue}</label>
  //       </div>
  //     ));

  //     const isCheckedGroup = uniqueFilterValues.map((_) => false);
  //     console.log(isCheckedGroup);
  //     console.log(checkboxGroup);

  //     setIsCheckedArray(isCheckedGroup);
  //     setCheckboxGroupToRender(checkboxGroup);
  //   }
  // }, [availableProducts]);

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
