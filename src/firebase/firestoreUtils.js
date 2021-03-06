import { firestore } from './firebaseConfig';
import firebase from 'firebase';

export const usersCollection = firestore.collection('users');

export const productsCollection = firestore.collection('products');

export const updateProductQuantityInFirestore = (productId, sizes) => {
  productsCollection.doc(productId).update({
    sizes,
  });
};

export const updateUserDataInFirestore = (
  userId,
  userDataToUpdateInFirestore
) => {
  usersCollection.doc(userId).update({
    ...userDataToUpdateInFirestore,
  });
};

export const addOrderToOrderHistory = (cart, userId) => {
  const date = new Date();
  const isoDate = date.toISOString();

  cart.forEach((element) => {
    const {
      productBrand,
      productCategory,
      productColor,
      productId,
      productName,
      productPrice,
      chosenOption,
      productImage,
    } = element;

    const imageForOrdersHistory = productImage.slice(0, 1);

    usersCollection.doc(userId).update({
      ordersHistory: firebase.firestore.FieldValue.arrayUnion({
        orderId: `${isoDate}`,
        productId,
        productName,
        productBrand,
        productPrice,
        productCategory,
        productColor,
        chosenOption,
        productImage: imageForOrdersHistory,
      }),
    });
  });
};
