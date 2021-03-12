import React from 'react';
import {
  StyledDiv,
  StyledImg,
  StyledCategory,
  StyledCategoryName,
  StyledFade,
} from './styles/StyledProductCategory';

const ProductCategory = ({ img, category }) => {
  return (
    <StyledDiv>
      <StyledImg src={img} />
      <StyledFade />
      <StyledCategory />
      <StyledCategoryName>{category}</StyledCategoryName>
    </StyledDiv>
  );
};

export default ProductCategory;
