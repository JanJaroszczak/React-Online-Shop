import React from 'react';
import styled from 'styled-components';

import ProductCategory from '../atoms/ProductCategory';
import category1 from '../../assets/images/category1.png';
import category2 from '../../assets/images/category2.png';
import category3 from '../../assets/images/category3.jpg';

const StyledCategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, auto));
  column-gap: 10px;
  justify-content: space-between;
  margin: 60px auto;

  /* border: 1px solid black; */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 30px;
  } ;
`;

const HomeCategories = () => {
  return (
    <StyledCategoriesWrapper>
      <ProductCategory img={category1} category={'nike'} />
      <ProductCategory img={category2} category={'adidas'} />
      <ProductCategory img={category3} category={'puma'} />
    </StyledCategoriesWrapper>
  );
};

export default HomeCategories;
