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
      <StyledImg src={img} alt={''} />
      <StyledFade />
      <StyledCategory />
      <StyledCategoryName>{category}</StyledCategoryName>
    </StyledDiv>
  );
};

export default ProductCategory;
