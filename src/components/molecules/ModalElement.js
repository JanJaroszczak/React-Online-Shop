import React, { useEffect, useRef } from 'react';
import { toggleSearchPanel } from '../../actions';
import { useDispatch } from 'react-redux';

import ProductInfoCollection from '../atoms/ProductInfoCollection';

import { routes } from '../../routes';

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

  const { productId, productPrice, chosenOption } = product;

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
            to={`${routes.product + productId}`}
            ref={popperRef}
          >
            <StyledModalSubElementWrapper>
              <ProductInfoCollection
                product={product}
                searchModal={searchModal}
              />
              <StyledPrice>$ {productPrice}</StyledPrice>
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
            <StyledPrice>$ {chosenOption.quantity * productPrice}</StyledPrice>
          </StyledModalSubElementWrapper>
        </StyledModalElementWrapper>
      )}
    </>
  );
};

export default ModalElement;
