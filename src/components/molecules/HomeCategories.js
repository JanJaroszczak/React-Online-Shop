import React from 'react';

import ProductCategory from '../atoms/ProductCategory';
import category1 from '../../assets/images/category1.png';
import category2 from '../../assets/images/category2.png';
import category3 from '../../assets/images/category3.jpg';
import { StyledCategoriesWrapper } from './styles/StyledHomeCategories';

const HomeCategories = () => {
  return (
    <StyledCategoriesWrapper>
      <ProductCategory img={category1} value={'nike'} />
      <ProductCategory img={category2} value={'adidas'} />
      <ProductCategory img={category3} value={'puma'} />
    </StyledCategoriesWrapper>
  );
};

export default HomeCategories;
