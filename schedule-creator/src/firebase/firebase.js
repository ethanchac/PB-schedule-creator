// NEW FILE: src/firebase/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgY1-NA5rfmWvoK9O2x8cLzHTfywBDLDE",
  authDomain: "schedule-creator-pb.firebaseapp.com",
  projectId: "schedule-creator-pb",
  storageBucket: "schedule-creator-pb.appspot.com",
  messagingSenderId: "38849789881",
  appId: "1:38849789881:web:d7ddc695d18bfa25a54068",
  measurementId: "G-X1B9XKD2LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };