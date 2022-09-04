// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, collectionGroup } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyCB_oF6q0tXykrQyzVjaX3W56l9bhxxs",
    authDomain: "prueba-tecnina.firebaseapp.com",
    projectId: "prueba-tecnina",
    storageBucket: "prueba-tecnina.appspot.com",
    messagingSenderId: "258972354606",
    appId: "1:258972354606:web:bf5e89763903ae7e4bb7bf",
    measurementId: "G-BNKS096V6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const google = new GoogleAuthProvider()

export const db = getFirestore();