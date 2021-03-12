import React from 'react';

import HomeCategories from '../components/molecules/HomeCategories';
import SpecialOffer from '../components/molecules/SpecialOffer';
import Heading from '../components/atoms/Heading';
import Header from '../components/organisms/Header';
import ProductsSlider from '../components/organisms/ProductsSlider';

// const StyledHomeWrapper = styled.div`
//   max-width: 1333px;
//   margin: 0 auto;
// `;

const Home = () => {
  return (
    <>
      <Header />
      {/* <StyledHomeWrapper> */}
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
      {/* </StyledHomeWrapper> */}
    </>
  );
};

export default Home;
