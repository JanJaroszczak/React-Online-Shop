import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes';
import Cart from '../views/Cart';
import Contact from '../views/Contact';
import Home from '../views/Home';
import ProductPage from '../views/ProductPage';
import Products from '../views/Products';

// import ProductPageInfo from '../components/molecules/ProductPageInfo';

// import PhotoCarousel from '../components/molecules/PhotoCarousel';

// import HomeCategories from '../components/molecules/HomeCategories';

// import ProductCard from '../components/molecules/ProductCard';

// import SpecialOffer from '../components/molecules/SpecialOffer';

// import ProductCategory from '../components/atoms/ProductCategory';
// import image2 from '../assets/images/test_photo2.jpg';

// import Heading from '../components/atoms/Heading';

// import Button from '../components/atoms/Button';

// import CheckboxFilters from '../components/molecules/CheckboxFilters';

// import Header from '../components/organisms/Header';
// import ProductsSlider from '../components/organisms/ProductsSlider';
// import CheckboxFiltersColumn from '../components/organisms/CheckboxFiltersColumn';

const Router = () => {
  return (
    <Switch>
      {/* <Route exact path={routes.home} component={CheckboxFiltersColumn} /> */}

      <Route exact path={routes.home} component={Home} />

      <Route path={routes.products} component={Products} />
      <Route path={routes.cart} component={Cart} />
      <Route path={routes.contact} component={Contact} />
      <Route path={routes.singleProduct} component={ProductPage} />

      {/* <Route exact path={routes.home} component={ProductPageInfo} /> */}

      {/* <Route exact path={routes.home} component={PhotoCarousel} /> */}

      {/* <Route exact path={routes.home} component={Header} /> */}
      {/* <Route
        path="/"
        exact
        component={() => (
          <Heading
            // type={'specialOffer'}
            heading={'trending'}
            headingDescription={'most trendy clothes'}
          />
        )}
      /> */}
      {/* <Route exact path={routes.home} component={ProductsSlider} /> */}

      {/* <Route exact path={routes.home} component={HomeCategories} /> */}

      {/* <Route exact path={routes.home} component={SpecialOffer} /> */}

      {/* <Route
        path="/"
        exact
        component={() => (
          <Heading
            // type={'specialOffer'}
            heading={'trending'}
            headingDescription={'most trendy clothes'}
          />
        )}
      /> */}

      {/* <Route exact path={routes.home} component={ProductsSlider} /> */}

      {/* <Route
        path="/"
        exact
        component={() => <Button size={'small'} label={'shop now'} />}
      /> */}

      {/* <Route
        path="/"
        exact
        component={() => <ProductCategory img={image2} category={'woman'} />}
      /> */}
      {/* <Route exact path={routes.home} component={ProductCard} /> */}
    </Switch>
  );
};

export default Router;
