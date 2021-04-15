import React, { useEffect, useState } from 'react';

import ProductImage from '../atoms/ProductImage';
import ProductInfo from '../atoms/ProductInfo';
import { StyledDiv } from './styles/StyledProductCard';
import Spinner from '../../components/atoms/Spinner';

const ProductCard = ({
  productName,
  productBrand,
  productPrice,
  productImage,
  productId,
  productPreviousPrice,
  extraState,
}) => {
  const [isCardMounted, setIsCardMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardMounted(true);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <StyledDiv>
      {isCardMounted ? (
        <>
          <ProductImage
            img={productImage[0]}
            productId={productId}
            productPrice={productPrice}
            productPreviousPrice={productPreviousPrice}
            extraState={extraState}
          />
          <ProductInfo
            model={productName}
            brand={productBrand}
            price={productPrice}
            productId={productId}
            productPreviousPrice={productPreviousPrice}
          />
        </>
      ) : (
        <Spinner
          isLoading={1}
          left={'50%'}
          top={'50%'}
          size={50}
          translateX={'-50%'}
          translateY={'-50%'}
        />
      )}
    </StyledDiv>
  );
};

export default ProductCard;
