import { firestore } from './firebaseConfig';
import firebase from 'firebase';

export const usersCollection = firestore.collection('users');

export const productsCollection = firestore.collection('products');

export const updateProductQuantityInFirestore = (productId, sizes) => {
  console.log(productId);
  console.log(sizes);

  productsCollection.doc(productId).update({
    sizes,
  });
  console.log('Firestore update');
};

export const addOrderToOrderHistory = (cart, userId) => {
  cart.forEach((element) => {
    const {
      productBrand,
      productCategory,
      productColor,
      productId,
      productName,
      productPrice,
      chosenOption,
    } = element;

    usersCollection.doc(userId).update({
      ordersHistory: firebase.firestore.FieldValue.arrayUnion({
        productId,
        productName,
        productBrand,
        productPrice,
        productCategory,
        productColor,
        size: chosenOption.size,
        quantity: chosenOption.quantity,
      }),
    });
  });
  console.log('Firestore order history update');
};
