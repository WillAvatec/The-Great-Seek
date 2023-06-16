// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKb2lnD_PxDaF8YKuHRWxUF0zjEWVXU2Q",
  authDomain: "the-great-seek.firebaseapp.com",
  projectId: "the-great-seek",
  storageBucket: "the-great-seek.appspot.com",
  messagingSenderId: "596301377756",
  appId: "1:596301377756:web:ba4eb3bce483d246c84419",
  measurementId: "G-9GHJZLKD54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics}