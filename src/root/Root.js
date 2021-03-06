import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MainTemplate from '../templates/MainTemplate';
import Router from '../routing/Router';

import { auth } from '../firebase/firebaseConfig';
import {
  calculateCartTotals,
  setCurrentUser,
  alignProductsAndCart,
  getCartFromLocalStorage,
  currentUserChecked,
} from '../actions';
import {
  productsCollection,
  usersCollection,
} from '../firebase/firestoreUtils';

const Root = () => {
  const [firstPageLoad, setFirstPageLoad] = useState(false);

  const cartProducts = useSelector(
    ({ productsAndCart }) => productsAndCart.cart
  );

  const dispatch = useDispatch();

  let cart = [];

  useEffect(() => {
    if (firstPageLoad) {
      localStorage.setItem('cart', JSON.stringify(cartProducts));
    }
  }, [cartProducts, firstPageLoad]);

  useEffect(() => {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      dispatch(getCartFromLocalStorage(cart));
    }
    setFirstPageLoad(true);
  }, [dispatch]);

  useEffect(() => {
    const subscribeProducts = productsCollection.onSnapshot((snapshot) => {
      const dataFromProductsCollection = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      });

      cart = JSON.parse(localStorage.getItem('cart'));
      if (cart) {
        dispatch(alignProductsAndCart(dataFromProductsCollection, cart));
      }
    });

    return () => {
      subscribeProducts();
    };
  }, [dispatch]);

  useEffect(() => {
    const subscribeUsers = usersCollection.onSnapshot((snapshot) => {
      const dataFromUsersCollection = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      });

      const currentUser = auth.currentUser;

      let currentUserId = null;

      if (currentUser) {
        currentUserId = currentUser.uid;

        const currentUserData = dataFromUsersCollection.filter(
          (user) => user.userId === currentUserId
        );

        dispatch(setCurrentUser(...currentUserData));
      } else {
        console.log('User not logged in.');
      }
    });

    return () => {
      subscribeUsers();
    };
  }, [dispatch]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const currentUserData = usersCollection.doc(user.uid);

        currentUserData.get().then((item) => {
          if (item.exists) {
            dispatch(setCurrentUser(item.data()));
            dispatch(currentUserChecked(true));
          } else {
            console.error('There is no user.');
          }
        });
      } else {
        dispatch(currentUserChecked(true));
        dispatch(setCurrentUser(null));
      }
    });
  }, []);

  useEffect(() => {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      dispatch(calculateCartTotals());
    }
  }, [cartProducts, dispatch]);

  return (
    <MainTemplate>
      <Router />
    </MainTemplate>
  );
};

export default Root;
