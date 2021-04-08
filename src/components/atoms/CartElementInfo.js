import React from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { setCartClosed } from '../../actions';
import {
  StyledLink,
  StyledImg,
  StyledProductInfo,
} from './styles/StyledCartElementInfo';

const CartElementInfo = ({ product, cartModal, searchModal }) => {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

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
        <StyledLink
          to={`/product/${product.productId}`}
          onClick={onClickCartModalHandler}
        >
          <StyledImg
            src={product.productImage[0]}
            alt={''}
            searchModal={searchModal}
          />
        </StyledLink>
      )}
      <StyledProductInfo searchModal={searchModal} cartModal={cartModal}>
        {searchModal ? (
          <h3>{`${product.productBrand} ${product.productName}`}</h3>
        ) : (
          <StyledLink
            to={`/product/${product.productId}`}
            onClick={onClickCartModalHandler}
          >
            <h3>
              {product.productName} {!cartModal && isMobile ? <br /> : null}
              (Size: {product.chosenOption.size})
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
