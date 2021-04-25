import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import salePercentageCalculation from '../../utils/salePercentageCalculation';

import { addProductToCart, setCartOpen } from '../../actions';
import {
  buttonVariants,
  headingTypes,
} from '../../helpers/atomsTypesAndVariants';
import { routes } from '../../routes';

import {
  StyledProductInfoWrapper,
  StyledExtraState,
  StyledProductDescription,
  StyledPrice,
  StyledSizeChoice,
  StyledSelect,
  StyledError,
  StyledSubmitButton,
} from './styles/StyledProductPageInfo';
import {
  StyledQuantityChoice,
  StyledQuantityInput,
} from './styles/StyledQuantitySelector';

const ProductPageInfo = ({ products, id }) => {
  const [chosenSize, setChosenSize] = useState('-');
  const [chosenQuantity, setChosenQuantity] = useState(1);

  const [errorVisibility, setErrorVisibility] = useState('hidden');
  const [errorMessage, setErrorMessage] = useState('Please choose a size!');
  const [isAddToCartButtonDisabled, setIsAddToCartButtonDisabled] = useState(
    false
  );

  const [notInStockMessageOn, setNotInStockMessageOn] = useState('');

  const select = useRef();

  const dispatch = useDispatch();

  const currentProduct = products.find((product) => product.productId === id);

  const sizeOptions = currentProduct.sizes.map((size) => {
    if (size.availableQuantity > 0) {
      return (
        <option key={size.size} value={size.size}>
          {size.size}
        </option>
      );
    } else {
      return <option key={size.size}>-</option>;
    }
  });

  useEffect(() => {
    if (chosenSize !== '-') setErrorVisibility('hidden');
    setChosenQuantity(1);

    const isAnySizeAvailable = sizeOptions.filter(
      (size) => size.props.children !== '-'
    );

    if (isAnySizeAvailable.length === 0) {
      setErrorMessage('No sizes available.');
      setErrorVisibility('visible');
      setIsAddToCartButtonDisabled(true);
    }
  }, [chosenSize]);

  const addToCart = (event) => {
    event.preventDefault();

    if (chosenSize !== '-') {
      dispatch(addProductToCart(id, chosenSize, chosenQuantity));
      dispatch(setCartOpen());
      setChosenSize('-');
      setChosenQuantity(1);
      select.current.selectedIndex = 0;

      setErrorVisibility('hidden');
    } else {
      setErrorVisibility('visible');
    }
  };

  const checkAvailableQuantityPerSize = () => {
    if (chosenSize === '-') {
      setErrorVisibility('visible');
      return;
    }
    const sizeToCheck = currentProduct.sizes.find(
      (size) => size.size === chosenSize
    );
    return sizeToCheck.availableQuantity;
  };

  const increaseQuantity = () => {
    if (chosenQuantity < checkAvailableQuantityPerSize())
      setChosenQuantity(chosenQuantity + 1);
    else if (chosenSize !== '-') {
      setNotInStockMessageOn('notInStock');
      setTimeout(() => {
        setNotInStockMessageOn('');
      }, 2000);
    }
  };

  const decreaseQuantity = () => {
    if (chosenQuantity > 1) setChosenQuantity(chosenQuantity - 1);
  };

  const salePercentage = salePercentageCalculation(
    currentProduct.productPrice,
    currentProduct.productPreviousPrice
  );

  const renderQuantityInput = () => (
    <>
      <button type="button" onClick={decreaseQuantity}>
        <span style={{ fontWeight: '700' }}>-</span>
      </button>
      <input id="quantity" type="number" value={chosenQuantity} readOnly />
      <button
        type="button"
        onClick={increaseQuantity}
        className={`${notInStockMessageOn}`}
      >
        +
      </button>
    </>
  );

  return (
    <StyledProductInfoWrapper extraState={currentProduct.extraState}>
      {currentProduct.extraState && (
        <StyledExtraState>{`${currentProduct.extraState}${
          currentProduct.extraState === 'sale'
            ? `\u00A0\u00A0-${salePercentage}%`
            : ''
        }`}</StyledExtraState>
      )}
      <Heading
        type={headingTypes.productPage}
        heading={currentProduct.productName}
        headingDescription={currentProduct.productBrand}
      />
      <StyledProductDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam
        deleniti debitis rerum placeat, officiis fugiat aperiam? Tenetur
        praesentium adipisci ad. Similique, ratione. Voluptatum ut accusamus
        optio doloribus saepe libero, voluptatibus sapiente aliquam rerum fuga
        nihil natus aperiam eius qui modi dolore assumenda, placeat quos dolores
        velit tenetur cumque eos?
      </StyledProductDescription>
      <StyledPrice>
        $ {currentProduct.productPrice.toFixed(2)}
        <span className="previousPrice">
          {currentProduct.productPreviousPrice
            ? `$ ${currentProduct.productPreviousPrice.toFixed(2)}`
            : null}
        </span>
      </StyledPrice>
      <form onSubmit={addToCart}>
        <StyledSizeChoice>
          <label htmlFor="size">Size:</label>
          <StyledSelect
            id="size"
            ref={select}
            onChange={(e) => {
              setChosenSize(
                e.target.value === '-' ? '-' : Number(e.target.value)
              );
            }}
          >
            <option value="-">-</option>
            {sizeOptions}
          </StyledSelect>
        </StyledSizeChoice>
        <StyledQuantityChoice>
          <label htmlFor="quantity">Quantity:</label>
          <StyledQuantityInput>{renderQuantityInput()}</StyledQuantityInput>
        </StyledQuantityChoice>
        <StyledError style={{ visibility: `${errorVisibility}` }}>
          {errorMessage}
        </StyledError>
        <StyledSubmitButton type="submit" disabled={isAddToCartButtonDisabled}>
          ADD TO CART
        </StyledSubmitButton>
      </form>
      <Link to={routes.products} style={{ textDecoration: 'none' }}>
        <Button
          variant={buttonVariants.productInfo}
          type="button"
          label="Go to All Products"
        />
      </Link>
    </StyledProductInfoWrapper>
  );
};

export default ProductPageInfo;
