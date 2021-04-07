import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Heading from '../components/atoms/Heading';
import ProductCard from '../components/molecules/ProductCard';

const StyledInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  width: 80vw;
  margin: 0 auto;

  /* border: 1px solid black; */
`;

const StyledSearchInput = styled.input`
  display: inline-block;
  height: 45px;
  /* width: 85%; */
  padding: 0 5px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  border-radius: 7px;
  outline: none;

  border: 1px solid black;
`;

const StyledSearchButton = styled.button`
  align-self: center;
  margin-left: 15px;
  background-color: transparent;
  border: none;

  i {
    font-size: ${({ theme }) => theme.fontSizes.xl};

    /* border: 1px solid black; */
  }
`;

const StyledProductsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  row-gap: 10px;
  justify-content: center;
  margin: 30px auto 0;
  width: 90%;

  /* border: 1px solid black; */
`;

const MobileSearchPage = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [foundProducts, setFoundProducts] = useState([]);

  const products = useSelector(({ products }) => products);

  const filterProducts = () => {
    if (searchInputValue.length > 0) {
      //Creates an array of product which match search input values entered by a user.
      const filteredProducts = products.filter((product) => {
        //Creates an all lower case string, of productColor, productName and productBrand values, sperated by space (e.g. 'tiempo 8 nike black'), for a given product.
        const productSearchStringToLowerCase = Object.entries(product)
          .filter(
            (entry) =>
              entry[0] === 'productColor' ||
              entry[0] === 'productName' ||
              entry[0] === 'productBrand'
          )
          .map((entryName) => entryName[1])
          .join(' ')
          .toLowerCase();

        //Creates an array from the abovementioned lower case string (e.g. ["tiempo", "8", "nike", "black"]).
        const arrayFromProductSearchStringToLowerCase = productSearchStringToLowerCase.split(
          ' '
        );

        // Converts input to lower case and changes it into an array (e.g. ["nike", "tiempo"]).
        const searchInputToLowerCase = searchInputValue.toLowerCase();
        const arrayFromSearchInputToLowerCase = searchInputToLowerCase.split(
          ' '
        );

        //If a user types a name and a space, for example 'nike ', arrayFromSearchInputToLowerCase would be ["nike", ""], therefore below the empty string is removed from array.
        const arrayFromSearchInputToLowerCaseExcludingEmptyString = arrayFromSearchInputToLowerCase.filter(
          (element) => element !== ''
        );

        // Creates a final array of products filtered out depending on user search input.
        const finalCheckArray = arrayFromSearchInputToLowerCaseExcludingEmptyString.filter(
          (input, index) => {
            //If a user enters only one word or a part of a word, the condition below will return true it user input is contained in arrayFromProductSearchStringToLowerCase.
            if (index === 0) {
              return arrayFromProductSearchStringToLowerCase.some(
                (item) => input === item.slice(0, input.length)
              );
            }
            //If user enters more than one word or one or more words and a part of a next word, the condition below will return true if last but one word will be equal to one of arrayFromProductSearchStringToLowerCase elements and if last word(or a string) will be included in one of arrayFromProductSearchStringToLowerCase elements. It could be improved to check the first condition for all input strings except the last one, but for a way that the current products are named, it fully serves its purpose.
            else {
              return (
                arrayFromProductSearchStringToLowerCase.some(
                  (item) =>
                    item ===
                    arrayFromSearchInputToLowerCaseExcludingEmptyString[
                      index - 1
                    ]
                ) &&
                arrayFromProductSearchStringToLowerCase.some((item) =>
                  item.includes(input)
                )
              );
            }
          }
        );

        //Condition for the initial filter method.
        return (
          finalCheckArray.length >=
          arrayFromSearchInputToLowerCaseExcludingEmptyString.length
        );
      });

      const productToDisplay = filteredProducts.map((product, index) => (
        <ProductCard {...product} key={product.productId} />
      ));

      setFoundProducts(productToDisplay);
    }
  };

  const submitHandler = (e) => {
    console.log('submitted');
    e.preventDefault();
    setSearchInputValue('');
    filterProducts();
    // e.target.blur();
  };

  return (
    <>
      <Heading
        type={'mobileTopHeading'}
        heading={'SEARCH PANEL'}
        headingDescription={``}
      />
      <form onSubmit={submitHandler}>
        <StyledInputWrapper>
          <StyledSearchInput
            // autoFocus
            type="text"
            value={searchInputValue}
            onChange={(event) => {
              setSearchInputValue(event.target.value);
            }}
          />
          <StyledSearchButton type="submit">
            <i className="fas fa-search"></i>
          </StyledSearchButton>
        </StyledInputWrapper>
      </form>
      <StyledProductsGridWrapper>{foundProducts}</StyledProductsGridWrapper>
    </>
  );
};

export default MobileSearchPage;
