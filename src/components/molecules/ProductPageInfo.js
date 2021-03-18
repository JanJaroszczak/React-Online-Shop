import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Heading from '../atoms/Heading';
import { addProductToCart } from '../../actions';
import {
  StyledProductInfoWrapper,
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

const ProductPageInfo = ({ id }) => {
  const [chosenSize, setChosenSize] = useState('-');
  const [chosenQuantity, setChosenQuantity] = useState(1);

  const [errorVisibility, setError] = useState('hidden');
  const [noSizeSelectionFailure, setNoSizeSelectionFailure] = useState(false);

  const [notInStockMessageOn, setNotInStockMessageOn] = useState('');

  const dispatch = useDispatch();

  const availableProducts = useSelector(({ products }) => products);

  const currentProduct = availableProducts.find(
    (product) => product.productId === id
  );

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
    if (noSizeSelectionFailure)
      chosenSize !== '-' ? setError('hidden') : setError('visible');
  }, [chosenSize, noSizeSelectionFailure]);

  const addToCart = (event) => {
    event.preventDefault();

    if (chosenSize !== '-') {
      dispatch(addProductToCart(id, chosenSize, chosenQuantity));
      setNoSizeSelectionFailure(false);
      setError('hidden');
    } else {
      setNoSizeSelectionFailure(true);
      setError('visible');
    }
  };

  const checkAvailableQuantityPerSize = () => {
    if (chosenSize === '-') {
      setError('visible');
      setNoSizeSelectionFailure(true);
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

  return (
    <StyledProductInfoWrapper>
      <Heading
        type={'productPage'}
        heading={currentProduct.productName}
        headingDescription={currentProduct.productBrand}
      />
      <StyledProductDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam
        deleniti debitis rerum placeat, officiis fugiat aperiam? Tenetur
        praesentium adipisci ad. Similique, ratione. Voluptatum ut accusamus
        optio doloribus saepe libero, voluptatibus sapiente aliquam rerum fuga
        nihil natus aperiam eius qui modi dolore assumenda, placeat quos dolores
        velit tenetur cumque eos? Dolorum, atque eum. Nobis, ipsum eaque error
        ex voluptatibus assumenda velit quas asperiores sequi ad numquam esse
        incidunt, ut veniam laboriosam minus. Hic rerum corrupti quis magni nam.
        Ipsa beatae quas eius, nihil delectus assumenda autem nostrum, accusamus
        ducimus, hic reiciendis architecto omnis sequi perferendis commodi
        obcaecati ullam? Dicta, iure.
      </StyledProductDescription>
      <StyledPrice>$ 100</StyledPrice>
      <form onSubmit={addToCart}>
        <StyledSizeChoice>
          <label htmlFor="size">Size:</label>
          <StyledSelect
            id="size"
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
          <StyledQuantityInput>
            <button type="button" onClick={decreaseQuantity}>
              -
            </button>
            <input
              id="quantity"
              type="number"
              value={chosenQuantity}
              readOnly
            />
            <button
              type="button"
              onClick={increaseQuantity}
              className={`${notInStockMessageOn}`}
            >
              +
            </button>
          </StyledQuantityInput>
        </StyledQuantityChoice>
        <StyledError style={{ visibility: `${errorVisibility}` }}>
          Please choose a size!
        </StyledError>
        <StyledSubmitButton type="submit">ADD TO CART</StyledSubmitButton>
      </form>
    </StyledProductInfoWrapper>
  );
};

export default ProductPageInfo;
