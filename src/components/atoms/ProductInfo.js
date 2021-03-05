import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: relative;
  width: 263px;
  height: 119px;
  padding: 2px 20px;
  color: ${({ theme }) => theme.colors.lightDark};
  text-transform: uppercase;
`;

const StyledH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 22px;
  font-weight: 300;
  margin-top: 20px;
  margin-right: 25px;
`;

const StyledCategory = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  margin-top: 5px;
  line-height: 20px;
  font-weight: 300;
`;

const StyledPlus = styled.span`
  position: absolute;
  top: 22px;
  right: 10px;
  color: ${({ theme }) => theme.colors.mainDark};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledPrice = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
  margin-top: 20px;
`;

const StyledPriceValue = styled.span`
  padding-left: 6px;
`;

const ProductInfo = ({ product, category, price }) => {
  return (
    <StyledDiv>
      <StyledH3>{product}</StyledH3>
      <StyledCategory>{category}</StyledCategory>
      <StyledPlus>
        <i class="fas fa-plus"></i>
      </StyledPlus>
      <StyledPrice>
        £<StyledPriceValue>{price.toFixed(2)}</StyledPriceValue>
      </StyledPrice>
    </StyledDiv>
  );
};

export default ProductInfo;
