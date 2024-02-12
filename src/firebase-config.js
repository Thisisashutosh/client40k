// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDku9wCgyycO4rEOGxec8Fth0XSxzre8YI",
  authDomain: "my-dawai-wala.firebaseapp.com",
  projectId: "my-dawai-wala",
  storageBucket: "my-dawai-wala.appspot.com",
  messagingSenderId: "725656455989",
  appId: "1:725656455989:web:2999b85ac10134359e5a7c",
  measurementId: "G-3LJ49B59FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);