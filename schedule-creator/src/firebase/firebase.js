// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Only import analytics if needed, and handle it conditionally
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
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
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Analytics conditionally
let analytics = null;
isSupported().then(yes => {
  if (yes) analytics = getAnalytics(app);
}).catch(e => console.error("Analytics error:", e));

export { auth, db, analytics };
export default app;