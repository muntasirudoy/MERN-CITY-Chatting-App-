
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,signOut } from "firebase/auth";
import { getDatabase,ref, set,onValue,push,child, get,onChildAdded, onChildChanged, onChildRemoved} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCH4O8Cp3Syxg0YRGFUavys44OkVfUVwOM",
  authDomain: "mern-city.firebaseapp.com",
  projectId: "mern-city",
  storageBucket: "mern-city.appspot.com",
  messagingSenderId: "918332997063",
  appId: "1:918332997063:web:e563c43d4c84d6cc546de2"
};


const app = initializeApp(firebaseConfig);
export const myDb = getFirestore(app)

const auth = getAuth()
const database = getDatabase();
export {auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,
              updateProfile,database,ref,set,
               signOut,onValue,push,child, get,
               onChildAdded, onChildChanged, onChildRemoved}