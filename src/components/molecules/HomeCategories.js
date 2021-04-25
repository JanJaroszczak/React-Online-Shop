import React from 'react';

import ProductCategory from '../atoms/ProductCategory';

import { brandNames } from './helpers/brandNamesForHomeCategories';

import { StyledCategoriesWrapper } from './styles/StyledHomeCategories';

import category1 from '../../assets/images/category1.png';
import category2 from '../../assets/images/category2.png';
import category3 from '../../assets/images/category3.jpg';

const HomeCategories = () => {
  const { brand1, brand2, brand3 } = brandNames;

  return (
    <StyledCategoriesWrapper>
      <ProductCategory img={category1} value={brand1} />
      <ProductCategory img={category2} value={brand2} />
      <ProductCategory img={category3} value={brand3} />
    </StyledCategoriesWrapper>
  );
};

export default HomeCategories;
