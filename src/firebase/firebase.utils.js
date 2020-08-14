import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBICIRh4SzbuYYykTw37FJWZcaxaeEl2vQ",
    authDomain: "my-clothing-website.firebaseapp.com",
    databaseURL: "https://my-clothing-website.firebaseio.com",
    projectId: "my-clothing-website",
    storageBucket: "my-clothing-website.appspot.com",
    messagingSenderId: "174133866089",
    appId: "1:174133866089:web:a53657aaad27c3e6f3fcf8",
    measurementId: "G-3DLF566E5W"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return; // if is sign out  then return this function

    const userRef = firestore.doc(`users/${userAuth.uid}`); //get query reference
    const snapShot = await userRef.get(); //get a snapshot to figure out whether there is a data there

    /* Checking any data in the database, if there isn't, create a new user using the data from the userAuth object */
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date(); //current day current time when this code is invoked
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey); //create a new collection
    console.log(collectionRef);

    const batch = firestore.batch(); //get a new batch, fires when all the calls are added
 
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj); //set the value of newDocRef
    });

    return await batch.commit(); //commit batch

};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return { 
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;