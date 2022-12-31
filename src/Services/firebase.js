// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAAMugfsEWdVFg1ZE7ooyJoBScJXKVDVno",
  authDomain: "devlinks-b5d9d.firebaseapp.com",
  projectId: "devlinks-b5d9d",
  storageBucket: "devlinks-b5d9d.appspot.com",
  messagingSenderId: "702324727982",
  appId: "1:702324727982:web:188890f1543926e4448d3f",
  measurementId: "G-ED878PWV2G"
};

const firebase = initializeApp(firebaseConfig) 

const db = getFirestore (firebase) 

const auth = getAuth (firebase)

export {db, auth};
