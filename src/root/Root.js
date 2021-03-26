import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../firebase/firebaseConfig';
// import styled, { css } from 'styled-components';

import MainTemplate from '../templates/MainTemplate';
import Router from '../routing/Router';
import {
  calculateCartTotals,
  setCurrentUser,
  alignProductsAndCart,
  getCartFromLocalStorage,
} from '../actions';
import {
  productsCollection,
  usersCollection,
} from '../firebase/firestoreUtils';

// import Button from '../components/atoms/Button';

// const StyledBtn = styled.button`
//   color: coral;
//   padding: 8px 18px;
//   /* background-color: ${(props) => (props.isBlue ? 'blue' : 'yellow')}; */
//   background-color: ${({ isBlue }) => (isBlue ? 'blue' : 'yellow')};

//   background-color: ${({ color }) => color};

//   ${({ diff }) =>
//     diff &&
//     css`
//       color: white;
//       border-radius: 10px;
//       margin: 5px;
//     `}
// `;

// const SecondBtn = styled(StyledBtn)`
//   color: black;
// `;

// const ThemeBtn = styled.button`
//   color: ${({ theme }) => theme.colors.mainWhite};
//   background-color: ${({ theme }) => theme.colors.mainDark};
//   padding: 8px 18px;
// `;
// const StyledLink = styled(Link)`

// `

const Root = () => {
  const [firstPageLoad, setFirstPageLoad] = useState(false);

  const cartProducts = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  let cart = null;

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

    // console.log('FIRST LOAD');
    setFirstPageLoad(true);
  }, [dispatch]);

  useEffect(() => {
    const subscribe = productsCollection.onSnapshot((snapshot) => {
      const dataFormProductsCollection = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      });

      cart = JSON.parse(localStorage.getItem('cart'));
      if (cart) {
        dispatch(alignProductsAndCart(dataFormProductsCollection, cart));
        console.log('products loaded from Firestore');
      }
    });

    return () => {
      subscribe();
    };
  }, [dispatch]);

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('Root - logged in');

      const currentUserData = usersCollection.doc(user.uid);

      currentUserData.get().then((item) => {
        if (item.exists) {
          console.log(item.data());

          dispatch(setCurrentUser(item.data()));
        } else {
          console.error('no user!');
        }
      });
    } else {
      console.log('Root- logged out');
      dispatch(setCurrentUser(null));
    }
  });

  useEffect(() => {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      dispatch(calculateCartTotals());
    }
  }, [cartProducts, dispatch]);

  return (
    <MainTemplate>
      <Router />

      {/* <h1>Root</h1>
      <StyledBtn>click me one</StyledBtn>
      <StyledBtn isBlue>click me two</StyledBtn>
      <StyledBtn color="pink">click me two</StyledBtn>
      <StyledBtn color="yellow" diff>
        click me diff
      </StyledBtn>
      <SecondBtn>Second btn</SecondBtn>
      <ThemeBtn>theme test</ThemeBtn>
      <Button onClickFn={() => console.log('CLICK')}>atom btn</Button>
      <Link>to products</Link> */}
    </MainTemplate>
  );
};

export default Root;
