import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CartModalElement from './CartModalElement';
import { toggleSearchPanel } from '../../actions';
import {
  StyledSearchPanelWrapper,
  StyledSearchInput,
  StyledSearchListWrapper,
  StyledSearchList,
  StyledNoResult,
} from './styles/StyledSearchProductsPopper';

const useKeyPress = function (targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });

  return keyPressed;
};

const SearchProductsPopper = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [foundProducts, setFoundProducts] = useState([]);
  const [selectedSearchProduct, setSelectedSearchProduct] = useState(undefined);
  const [cursor, setCursor] = useState(-1);
  const [hovered, setHovered] = useState(undefined);

  const downPress = useKeyPress('ArrowDown');
  const upPress = useKeyPress('ArrowUp');
  const enterPress = useKeyPress('Enter');

  const dispatch = useDispatch();

  const products = useSelector(({ products }) => products);

  useEffect(() => {
    if (foundProducts.length && downPress) {
      setCursor((prevState) =>
        prevState < foundProducts.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);
  useEffect(() => {
    if (foundProducts.length && upPress) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);
  useEffect(() => {
    if (foundProducts.length && enterPress) {
      setSelectedSearchProduct(foundProducts[cursor].key);
    }
  }, [enterPress]);
  useEffect(() => {
    if (foundProducts.length && hovered >= 0) {
      setCursor(hovered);
    }
  }, [hovered]);

  useEffect(() => {
    if (selectedSearchProduct) dispatch(toggleSearchPanel());
  }, [selectedSearchProduct]);

  useEffect(() => {
    if (searchInputValue === '') setCursor(-1);
  }, [searchInputValue]);

  const handleClick = (event) => {
    setSearchInputValue(event.target.value);
  };

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
              return arrayFromProductSearchStringToLowerCase.some((item) =>
                item.includes(input)
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
        <CartModalElement
          key={product.productId}
          product={product}
          searchModal
          index={index}
          cursor={cursor}
          setSelectedSearchProduct={setSelectedSearchProduct}
          setHovered={setHovered}
        />
      ));

      setFoundProducts(productToDisplay);
    }
  };

  useEffect(() => {
    filterProducts();
  }, [cursor, searchInputValue]);

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
      <StyledSearchListWrapper
        open={searchInputValue.length > 0 ? true : false}
      >
        <StyledSearchList>
          {foundProducts.length === 0 ? (
            <StyledNoResult>No products found.</StyledNoResult>
          ) : (
            <ul>{foundProducts}</ul>
          )}
        </StyledSearchList>
      </StyledSearchListWrapper>
      {selectedSearchProduct && (
        <Redirect to={`/product/${selectedSearchProduct}`} />
      )}
    </StyledSearchPanelWrapper>
  );
};

export default SearchProductsPopper;
