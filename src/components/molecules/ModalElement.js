import React, { useEffect, useRef } from 'react';
import { toggleSearchPanel } from '../../actions';
import ProductInfoCollection from '../atoms/ProductInfoCollection';
import { useDispatch } from 'react-redux';

import {
  StyledModalElementWrapper,
  StyledLink,
  StyledModalSubElementWrapper,
  StyledPrice,
} from './styles/StyledModalElement';

const ModalElement = ({
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
      console.log('Ruch');
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
            <StyledModalSubElementWrapper>
              <ProductInfoCollection
                product={product}
                searchModal={searchModal}
              />
              <StyledPrice>$ {product.productPrice}</StyledPrice>
            </StyledModalSubElementWrapper>
          </StyledLink>
        </StyledModalElementWrapper>
      ) : (
        <StyledModalElementWrapper searchModal={searchModal}>
          <StyledModalSubElementWrapper>
            <ProductInfoCollection
              product={product}
              searchModal={searchModal}
              cartModal={cartModal}
            />
            <StyledPrice>
              $ {product.chosenOption.quantity * product.productPrice}
            </StyledPrice>
          </StyledModalSubElementWrapper>
        </StyledModalElementWrapper>
      )}
    </>
  );
};

export default ModalElement;
