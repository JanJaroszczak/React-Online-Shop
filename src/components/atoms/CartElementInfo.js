import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setCartClosed } from '../../actions';
import {
  StyledLink,
  StyledImg,
  StyledProductInfo,
} from './styles/StyledCartElementInfo';

const CartElementInfo = ({ product, searchModal }) => {
  const dispatch = useDispatch();

  const onClickCartModalHandler = () => {
    dispatch(setCartClosed());
  };

  return (
    <>
      {searchModal ? (
        <StyledImg
          src={product.productImage[0]}
          alt={''}
          searchModal={searchModal}
        />
      ) : (
        <Link
          to={`/product/${product.productId}`}
          onClick={onClickCartModalHandler}
        >
          <StyledImg
            src={product.productImage[0]}
            alt={''}
            searchModal={searchModal}
          />
        </Link>
      )}
      <StyledProductInfo searchModal={searchModal}>
        {searchModal ? (
          <h3>{`${product.productBrand} ${product.productName}`}</h3>
        ) : (
          <StyledLink
            to={`/product/${product.productId}`}
            onClick={onClickCartModalHandler}
          >
            <h3>
              {product.productName} (Size: {product.chosenOption.size})
            </h3>
          </StyledLink>
        )}
        {searchModal ? null : (
          <span>
            {product.chosenOption.quantity}x ${product.productPrice}
          </span>
        )}
      </StyledProductInfo>
    </>
  );
};

export default CartElementInfo;
