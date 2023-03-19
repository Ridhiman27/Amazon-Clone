
// Import the functions you need from the SDKs you need

// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKFkgcJUcNp5CcjIY7sZNcJtSwn0o6wLg",
  authDomain: "clone-e656b.firebaseapp.com",
  projectId: "clone-e656b",
  storageBucket: "clone-e656b.appspot.com",
  messagingSenderId: "397158286461",
  appId: "1:397158286461:web:234dd5f8b3338f30e8dd14",
  measurementId: "G-HJ7CJTYYSR"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
// const analytics = getAnalytics(app);

export {db,auth};
