// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKb2lnD_PxDaF8YKuHRWxUF0zjEWVXU2Q",
  authDomain: "the-great-seek.firebaseapp.com",
  projectId: "the-great-seek",
  storageBucket: "the-great-seek.appspot.com",
  messagingSenderId: "596301377756",
  appId: "1:596301377756:web:ba4eb3bce483d246c84419",
  measurementId: "G-9GHJZLKD54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Reference to the dataBase

const db = getFirestore(app);

// Function that returns level data

async function getLevels() {
  const levelCollection = collection(db, "Levels");
  const levelSnapshot = await getDocs(levelCollection);
  const levelData = levelSnapshot.docs.map((doc) => {
    return doc.data();
  });
  return levelData;
}

export { app, analytics, db, getLevels };
