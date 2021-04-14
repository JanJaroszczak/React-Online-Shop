import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CartModalElement from './CartModalElement';
import { toggleSearchPanel } from '../../actions';
import searchProducts from '../../utils/searchProducts';
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
    const filteredProducts = searchProducts(searchInputValue, products);

    if (filteredProducts) {
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
