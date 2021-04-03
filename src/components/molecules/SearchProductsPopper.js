import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import CartModalElement from './CartModalElement';
import { WorkOffOutlined } from '@material-ui/icons';

const StyledSearchPanelWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledSearchInput = styled.input`
  height: 45px;
  width: 230px;
  padding: 0 5px;
  margin-bottom: 2px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  border-radius: 7px;
  outline: none;

  border: 1px solid black;
`;

const StyledSearchList = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  display: none;
  /* height: 300px; */
  width: 400px;
  overflow: auto;
  max-height: 60vh;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  border: 1px solid black;
  border-radius: 7px;

  ${({ open }) =>
    open &&
    css`
      display: block;
    `}
`;

const StyledNoResult = styled.p`
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

const SearchProductsPopper = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [foundProducts, setFoundProducts] = useState([]);

  const products = useSelector(({ products }) => products);

  const handleClick = (event) => {
    setSearchInputValue(event.target.value);
  };

  const filterProducts = () => {
    if (searchInputValue.length > 0) {
      const filteredProducts = products.filter((product) => {
        // console.log(Object.entries(product));

        const productSearchString = Object.entries(product)
          .filter(
            (entry) =>
              entry[0] === 'productColor' ||
              entry[0] === 'productName' ||
              entry[0] === 'productBrand'
          )
          .map((entryName) => entryName[1])
          .join(' ');

        // console.log(Object.entries(product));
        // console.log(
        //   Object.entries(product).filter(
        //     (entry) =>
        //       entry[0] === 'productColor' ||
        //       entry[0] === 'productName' ||
        //       entry[0] === 'productBrand' ||
        //       entry[0] === 'productCategory' ||
        //       entry[0] === 'productFamily'
        //   )
        // );

        // console.log(
        //   Object.entries(product)
        //     .filter(
        //       (entry) =>
        //         entry[0] === 'productColor' ||
        //         entry[0] === 'productName' ||
        //         entry[0] === 'productBrand' ||
        //         entry[0] === 'productCategory' ||
        //         entry[0] === 'productFamily'
        //     )
        //     .map((entryName) => entryName[1])
        // );

        // console.log(
        //   Object.entries(product)
        //     .filter(
        //       (entry) =>
        //         entry[0] === 'productColor' ||
        //         entry[0] === 'productName' ||
        //         entry[0] === 'productBrand' ||
        //         entry[0] === 'productCategory' ||
        //         entry[0] === 'productFamily'
        //     )
        //     .map((entryName) => entryName[1])
        //     .join('')
        // );

        // console.log(productSearchString);

        const productSearchStringToLowerCase = productSearchString.toLowerCase();
        const arrayFromProductSearchStringToLowerCase = productSearchStringToLowerCase.split(
          ' '
        );

        const searchInputToLowerCase = searchInputValue.toLowerCase();
        const arrayFromSearchInputToLowerCase = searchInputToLowerCase.split(
          ' '
        );
        console.log(productSearchStringToLowerCase);
        console.log(arrayFromProductSearchStringToLowerCase);
        console.log(arrayFromSearchInputToLowerCase);

        const finalCheckArray = arrayFromProductSearchStringToLowerCase.filter(
          (item) =>
            arrayFromSearchInputToLowerCase.some((input) =>
              item.includes(input)
            )
        );

        return (
          // searchToLowerCase ===
          // productSearchStringToLowerCase.slice(0, searchInputValue.length)
          // productSearchStringToLowerCase.includes(searchToLowerCase)
          finalCheckArray.length === arrayFromSearchInputToLowerCase.length
        );
      });

      const productToDisplay = filteredProducts.map((product) => (
        // <li key={item.productId}>{item.productName}</li>
        <CartModalElement
          key={product.productId}
          product={product}
          searchModal
        />
      ));

      setFoundProducts(productToDisplay);
    }
  };

  useEffect(() => {
    filterProducts();
  }, [searchInputValue]);

  return (
    <StyledSearchPanelWrapper>
      <StyledSearchInput
        autoFocus
        className="input"
        aria-describedby="transitions-popper"
        type="text"
        value={searchInputValue}
        onChange={handleClick}
      />

      <StyledSearchList open={searchInputValue.length > 0 ? true : false}>
        {foundProducts.length === 0 ? (
          <StyledNoResult>No products found.</StyledNoResult>
        ) : (
          <ul>{foundProducts}</ul>
        )}
      </StyledSearchList>
    </StyledSearchPanelWrapper>
  );
};

export default SearchProductsPopper;
