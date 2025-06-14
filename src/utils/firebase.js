// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoxWjIUhRAeYln2TQyyPOUQqhasb20Atg",
  authDomain: "netflixgpt-739df.firebaseapp.com",
  projectId: "netflixgpt-739df",
  storageBucket: "netflixgpt-739df.firebasestorage.app",
  messagingSenderId: "298598329939",
  appId: "1:298598329939:web:b25cb7d125426f1050a0a6",
  measurementId: "G-3SJ8S5FBVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();