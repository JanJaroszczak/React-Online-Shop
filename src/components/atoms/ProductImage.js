import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import salePercentageCalculation from '../../utils/salePercentageCalculation';

const StyledDiv = styled.div`
  position: relative;
  margin-bottom: 2px;
`;

const StyledOverflowHidde = styled.div`
  overflow: hidden;
  font-size: 0;
`;

const StyledImg = styled.img`
  width: 100%;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1) translate(-2%, 2%);
  }
`;

// const StyledBgImg = styled.div`
//   background: url(${({ img }) => img});
//   width: 200px;
//   height: 200px;
//   /* background-repeat: no-repeat; */
//   /* background-position: 50%; */
//   background-size: contain;
// `;

const StyledCircle = styled.div`
  position: absolute;
  top: -15px;
  right: -10px;
  background-color: ${({ extraState }) =>
    extraState === 'sale'
      ? 'black'
      : extraState === 'new'
      ? '#959595'
      : 'black'};
  color: ${({ theme }) => theme.colors.mainWhite};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
`;

const StyledCircleInfo = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ theme }) => theme.fontSizes.ss};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-transform: uppercase;
`;

const ProductImage = ({
  img,
  productId,
  productPrice,
  productPreviousPrice,
  extraState,
}) => {
  const salePercentage = salePercentageCalculation(
    productPrice,
    productPreviousPrice
  );

  return (
    <StyledDiv>
      <StyledOverflowHidde>
        <Link to={`/product/${productId}`}>
          <StyledImg src={img} alt={''} />
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
