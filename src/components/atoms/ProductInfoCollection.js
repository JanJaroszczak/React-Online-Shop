import React from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { mediaQueryStrings } from '../../helpers/mediaQueryStrings';
import { routes } from '../../routes';
import { setCartClosed } from '../../actions';

import {
  StyledLink,
  StyledImg,
  StyledProductInfo,
} from './styles/StyledProductInfoCollection';

const ProductInfoCollection = ({ product, cartModal, searchModal }) => {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({
    query: mediaQueryStrings.max480,
  });

  const onClickCartModalHandler = () => {
    dispatch(setCartClosed());
  };

  const {
    productImage,
    productId,
    productBrand,
    productName,
    chosenOption,
    productPrice,
  } = product;

  return (
    <>
      {searchModal ? (
        <StyledImg
          src={productImage[0]}
          alt={`${productBrand} ${productName}`}
          searchModal={searchModal}
        />
      ) : (
        <StyledLink
          to={`${routes.product + productId}`}
          onClick={onClickCartModalHandler}
        >
          <StyledImg
            src={productImage[0]}
            alt={`${productBrand} ${productName}`}
            searchModal={searchModal}
          />
        </StyledLink>
      )}
      <StyledProductInfo searchModal={searchModal} cartModal={cartModal}>
        {searchModal ? (
          <h3>{`${productBrand} ${productName}`}</h3>
        ) : (
          <StyledLink
            to={`${routes.product + productId}`}
            onClick={onClickCartModalHandler}
          >
            <h3>
              {productName} {!cartModal && isMobile ? <br /> : null}
              (Size: {chosenOption.size})
            </h3>
          </StyledLink>
        )}
        {searchModal ? null : (
          <span>
            {chosenOption.quantity}x ${productPrice}
          </span>
        )}
      </StyledProductInfo>
    </>
  );
};

export default ProductInfoCollection;
