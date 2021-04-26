import React from 'react';

import Header from '../components/organisms/Header';
import Heading from '../components/atoms/Heading';
import HomeCategories from '../components/molecules/HomeCategories';
import ProductsSlider from '../components/organisms/ProductsSlider';
import SpecialOffer from '../components/molecules/SpecialOffer';

import { StyledCommonPageWrapper } from './styles/StyledCommonElements';

const HomePage = () => {
  return (
    <>
      <Header />
      <StyledCommonPageWrapper>
        <Heading
          heading={'new arrivals'}
          headingDescription={'brand-new models prepared for 2021'}
        />
        <ProductsSlider />
        <HomeCategories />
        <SpecialOffer />
        <Heading
          heading={'bestsellers'}
          headingDescription={'top models over the last year'}
        />
        <ProductsSlider />
      </StyledCommonPageWrapper>
    </>
  );
};

export default HomePage;
