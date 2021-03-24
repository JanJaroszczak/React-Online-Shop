import React from 'react';
import styled from 'styled-components';

import HomeCategories from '../components/molecules/HomeCategories';
import SpecialOffer from '../components/molecules/SpecialOffer';
import Heading from '../components/atoms/Heading';
import Header from '../components/organisms/Header';
import ProductsSlider from '../components/organisms/ProductsSlider';

const StyledHomeWrapper = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 0 20px;

  /* border: 1px solid black; */
`;

const Home = () => {
  return (
    <>
      <Header />
      <StyledHomeWrapper>
        <Heading
          // type={'specialOffer'}
          heading={'new arrivals'}
          headingDescription={'brand-new models prepared for 2021'}
        />
        <ProductsSlider />
        <HomeCategories />
        <SpecialOffer />
        <Heading
          // type={'specialOffer'}
          heading={'bestsellers'}
          headingDescription={'top models over the last year'}
        />
        <ProductsSlider />
      </StyledHomeWrapper>
    </>
  );
};

export default Home;
