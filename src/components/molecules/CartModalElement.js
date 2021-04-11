import React, { useEffect, useRef } from 'react';
import { toggleSearchPanel } from '../../actions';
import CartElementInfo from '../atoms/CartElementInfo';
import { useDispatch } from 'react-redux';

import {
  StyledModalElementWrapper,
  StyledLink,
  StyledCartElementWrapper,
  StyledPrice,
} from './styles/StyledCartModalElement';

const CartModalElement = ({
  product,
  cartModal,
  searchModal,
  setHovered,
  index,
  cursor,
}) => {
  const dispatch = useDispatch();

  const popperRef = useRef(null);

  useEffect(() => {
    if (cursor && cursor === index) {
      popperRef.current.focus();
    }
  }, [cursor]);

  const onClickSearchPanelHandler = () => {
    dispatch(toggleSearchPanel());
  };

  return (
    <>
      {searchModal ? (
        <StyledModalElementWrapper
          className={`${index === cursor ? 'active' : ''}`}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(undefined)}
          searchModal={searchModal}
        >
          <StyledLink
            onClick={onClickSearchPanelHandler}
            to={`/product/${product.productId}`}
            ref={popperRef}
          >
            <StyledCartElementWrapper>
              <CartElementInfo product={product} searchModal={searchModal} />
              <StyledPrice>$ {product.productPrice}</StyledPrice>
            </StyledCartElementWrapper>
          </StyledLink>
        </StyledModalElementWrapper>
      ) : (
        <StyledModalElementWrapper searchModal={searchModal}>
          <StyledCartElementWrapper>
            <CartElementInfo
              product={product}
              searchModal={searchModal}
              cartModal={cartModal}
            />
            <StyledPrice>
              $ {product.chosenOption.quantity * product.productPrice}
            </StyledPrice>
          </StyledCartElementWrapper>
        </StyledModalElementWrapper>
      )}
    </>
  );
};

export default CartModalElement;
