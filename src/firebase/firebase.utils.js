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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;