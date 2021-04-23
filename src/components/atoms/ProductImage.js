import React from 'react';
import { Link } from 'react-router-dom';

import salePercentageCalculation from '../../utils/salePercentageCalculation';

import { routes } from '../../routes';

import {
  StyledDiv,
  StyledOverflowHidde,
  StyledImg,
  StyledCircle,
  StyledCircleInfo,
} from './styles/StyledProductImage';

const ProductImage = ({
  img,
  productId,
  productPrice,
  productPreviousPrice,
  extraState,
  productBrand,
  productName,
}) => {
  const salePercentage = salePercentageCalculation(
    productPrice,
    productPreviousPrice
  );

  return (
    <StyledDiv>
      <StyledOverflowHidde>
        <Link to={`${routes.product + productId}`}>
          <StyledImg src={img} alt={`${productBrand} ${productName}`} />
        </Link>
        {/* <StyledBgImg img={img} /> */}
      </StyledOverflowHidde>
      {extraState && (
        <StyledCircle extraState={extraState}>
          <StyledCircleInfo>{`${extraState}${
            extraState === 'sale' ? `\n-${salePercentage}%` : ''
          }`}</StyledCircleInfo>
        </StyledCircle>
      )}
    </StyledDiv>
  );
};

export default ProductImage;
