import React from 'react';
import styled from 'styled-components';

const ProductCategory = ({ img, category }) => {
  const StyledDiv = styled.div`
    position: relative;
    width: 360px;
    height: 459px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.mainDark};
  `;

  const StyledImg = styled.img`
    width: 100%;
    transition: 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  `;

  const StyledCategory = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 80px;
    width: 150px;
    border: 2px solid white;
  `;

  const StyledCategoryName = styled.div`
    position: absolute;
    width: 150px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 300;
    color: ${({ theme }) => theme.colors.mainWhite};
    text-align: center;
    text-transform: uppercase;
    border: 2px solid white;
  `;

  return (
    <StyledDiv>
      <StyledImg src={img} />
      <StyledCategory />
      <StyledCategoryName>{category}</StyledCategoryName>
    </StyledDiv>
  );
};

export default ProductCategory;
