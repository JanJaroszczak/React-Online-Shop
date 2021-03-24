import { firestore } from './firebaseConfig';

export const usersCollection = firestore.collection('users');

export const productsCollection = firestore.collection('products');
