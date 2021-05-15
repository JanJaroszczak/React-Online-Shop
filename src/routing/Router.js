import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ScrollToTop from '../utils/ScrollToTop';
import { routes } from '../routes';
import CartPage from '../views/CartPage';
import CheckoutPage from '../views/CheckoutPage';
import ContactPage from '../views/ContactPage';
import HomePage from '../views/HomePage';
import ProductPage from '../views/ProductPage';
import ProductsPage from '../views/ProductsPage';
import SignUpPage from '../views/SignUpPage';
import LogInPage from '../views/LogInPage';
import AuthBeforeCheckoutPage from '../views/AuthBeforeCheckoutPage';
import OrderSummaryPage from '../views/OrderSummaryPage';
import AccountPage from '../views/AccountPage';
import MobileSearchPage from '../views/MobileSearchPage';

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
  const {
    home,
    products,
    cart,
    checkout,
    contact,
    singleProduct,
    signup,
    login,
    authbeforecheckout,
    ordersummary,
    accountOrder,
    account,
    mobileSearch,
  } = routes;

  return (
    <ScrollToTop>
      <Switch>
        {/* <Route exact path={routes.home} component={CheckboxFiltersColumn} /> */}

        <Route exact path={home} component={HomePage} />
        <Route path={products} component={ProductsPage} />
        <Route path={cart} component={CartPage} />
        <Route path={checkout} component={CheckoutPage} />
        <Route path={contact} component={ContactPage} />
        <Route path={singleProduct} component={ProductPage} />
        {/* <Route path={upload} component={DatabaseUpload} /> */}
        <Route path={signup} component={SignUpPage} />
        <Route path={login} component={LogInPage} />
        <Route path={authbeforecheckout} component={AuthBeforeCheckoutPage} />
        <Route path={ordersummary} component={OrderSummaryPage} />
        <Route path={accountOrder} component={AccountPage} />
        <Route path={account} component={AccountPage} />
        <Route path={mobileSearch} component={MobileSearchPage} />

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
    </ScrollToTop>
  );
};

export default Router;
