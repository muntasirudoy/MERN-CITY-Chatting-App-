// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmUb2ANrgngr6ANckfNKLrQX9EJZVsoaA",

  authDomain: "testclass-6b287.firebaseapp.com",

  projectId: "testclass-6b287",

  storageBucket: "testclass-6b287.appspot.com",

  messagingSenderId: "1026812555542",

  appId: "1:1026812555542:web:fb7eca96fc25c88f99e037",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
