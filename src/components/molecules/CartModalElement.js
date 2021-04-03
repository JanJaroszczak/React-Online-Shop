import React, { useEffect, useState } from 'react';
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
  searchModal,
  setHovered,
  index,
  cursor,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();

  const onClickSearchPanelHandler = () => {
    dispatch(toggleSearchPanel());
  };

  useEffect(() => {
    if (index === cursor) setIsFocus(true);
  }, [cursor]);

  return (
    <>
      {searchModal ? (
        <StyledModalElementWrapper
          // autoFocus={isFocus}
          className={`${index === cursor ? 'active' : ''}`}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(undefined)}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(undefined)}
          searchModal={searchModal}
        >
          <StyledLink
            onClick={onClickSearchPanelHandler}
            to={`/product/${product.productId}`}
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
            <CartElementInfo product={product} searchModal={searchModal} />
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
