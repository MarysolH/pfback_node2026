import { db } from '../data/data.js';

import {
    collection,
    getDocs,
    doc,
    getDoc,
    addDoc, 
    deleteDoc,
    updateDoc
} from 'firebase/firestore';


const productsCollection = collection(db, "products");


export const findAllProducts = async () => {

    const snapshot = await getDocs(productsCollection);

    return snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data()
    }));

};


export const findProductById = async (id) => {

    const productRef = doc(db, "products", id);

    const productSnapshot = await getDoc(productRef);

    if (!productSnapshot.exists()) {
        return null;
    }

    return {
        id: productSnapshot.id,
        ...productSnapshot.data()
    };

};


export const saveProduct = async (product) => {

    const document = await addDoc(productsCollection, product);

    return {
        id: document.id,
        ...product
    };

};


export const deleteProduct = async (id) => {

    const productRef = doc(db, "products", id);

    const productSnapshot = await getDoc(productRef);

    if (!productSnapshot.exists()) {
        return false;
    }

    await deleteDoc(productRef);

    return true;
};


export const updateProduct = async (id, data) => {

    const productRef = doc(db, "products", id);

    const productSnapshot = await getDoc(productRef);

    if (!productSnapshot.exists()) {
        return false;
    }

    await updateDoc(productRef, data);

    return true;
};