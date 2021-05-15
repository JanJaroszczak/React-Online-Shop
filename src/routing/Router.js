import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ScrollToTop from '../utils/ScrollToTop';
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

import { routes } from '../routes';

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
        <Route exact path={home} component={HomePage} />
        <Route path={products} component={ProductsPage} />
        <Route path={cart} component={CartPage} />
        <Route path={checkout} component={CheckoutPage} />
        <Route path={contact} component={ContactPage} />
        <Route path={singleProduct} component={ProductPage} />
        <Route path={signup} component={SignUpPage} />
        <Route path={login} component={LogInPage} />
        <Route path={authbeforecheckout} component={AuthBeforeCheckoutPage} />
        <Route path={ordersummary} component={OrderSummaryPage} />
        <Route path={accountOrder} component={AccountPage} />
        <Route path={account} component={AccountPage} />
        <Route path={mobileSearch} component={MobileSearchPage} />
      </Switch>
    </ScrollToTop>
  );
};

export default Router;
