import { firestore } from './firebaseConfig';

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
