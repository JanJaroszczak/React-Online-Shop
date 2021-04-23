import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../routes';

import {
  StyledDiv,
  StyledImg,
  StyledCategory,
  StyledCategoryName,
  StyledFade,
} from './styles/StyledProductCategory';

const ProductCategory = ({ img, value }) => {
  return (
    <StyledDiv>
      <StyledImg src={img} alt={`${value} category background image`} />
      <StyledFade />
      <StyledCategory />
      <Link
        to={{
          pathname: routes.products,
          state: {
            category: 'productBrand',
            values: [`${value[0].toUpperCase()}${value.slice(1)}`],
          },
        }}
      >
        <StyledCategoryName>{value}</StyledCategoryName>
      </Link>
    </StyledDiv>
  );
};

export default ProductCategory;
