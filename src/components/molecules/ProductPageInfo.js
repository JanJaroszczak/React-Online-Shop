import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import salePercentageCalculation from '../../utils/salePercentageCalculation';

import { addProductToCart, setCartOpen } from '../../actions';
import { buttonLabels } from '../../helpers/buttonLabels';
import {
  buttonVariants,
  headingTypes,
} from '../../helpers/atomsTypesAndVariants';
import { errorMessages } from './helpers/errorMessages';
import { routes } from '../../routes';
import { validationMessages } from '../../helpers/validationMessages';

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
import { StyledCommonLink } from '../../globalStyles/GlobalStyledComponents';

const ProductPageInfo = ({ products, id }) => {
  const [chosenSize, setChosenSize] = useState('-');
  const [chosenQuantity, setChosenQuantity] = useState(1);

  const [errorVisibility, setErrorVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    validationMessages.sizeChoiceRequired
  );
  const [isAddToCartButtonDisabled, setIsAddToCartButtonDisabled] = useState(
    false
  );

  const [notInStockMessageOn, setNotInStockMessageOn] = useState('');

  const select = useRef();

  const dispatch = useDispatch();

  const currentProduct = products.find((product) => product.productId === id);

  const {
    sizes,
    productPrice,
    productPreviousPrice,
    extraState,
    productName,
    productBrand,
  } = currentProduct;

  const sizeOptions = sizes.map((size) => {
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
    if (chosenSize !== '-') setErrorVisibility(false);
    setChosenQuantity(1);

    const isAnySizeAvailable = sizeOptions.filter(
      (size) => size.props.children !== '-'
    );

    if (isAnySizeAvailable.length === 0) {
      setErrorMessage(errorMessages.noSizes);
      setErrorVisibility(true);
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

      setErrorVisibility(false);
    } else {
      setErrorVisibility(true);
    }
  };

  const checkAvailableQuantityPerSize = () => {
    if (chosenSize === '-') {
      setErrorVisibility(true);
      return;
    }
    const sizeToCheck = sizes.find((size) => size.size === chosenSize);
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
    productPrice,
    productPreviousPrice
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
    <StyledProductInfoWrapper extraState={extraState}>
      {extraState && (
        <StyledExtraState>{`${extraState}${
          extraState === 'sale' ? `\u00A0\u00A0-${salePercentage}%` : ''
        }`}</StyledExtraState>
      )}
      <Heading
        type={headingTypes.productPage}
        heading={productName}
        headingDescription={productBrand}
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
        $ {productPrice.toFixed(2)}
        <span className="previousPrice">
          {productPreviousPrice ? `$ ${productPreviousPrice.toFixed(2)}` : null}
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
        <StyledError visible={errorVisibility}>{errorMessage}</StyledError>
        <StyledSubmitButton type="submit" disabled={isAddToCartButtonDisabled}>
          ADD TO CART
        </StyledSubmitButton>
      </form>
      <StyledCommonLink to={routes.products}>
        <Button
          variant={buttonVariants.productInfo}
          type="button"
          label={buttonLabels.goToAllProducts}
        />
      </StyledCommonLink>
    </StyledProductInfoWrapper>
  );
};

export default ProductPageInfo;
