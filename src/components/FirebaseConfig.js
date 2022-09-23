// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj7daWHAemn07BgWkVy8ssGrZUJyw89R8",
  authDomain: "photofox-dd457.firebaseapp.com",
  projectId: "photofox-dd457",
  storageBucket: "photofox-dd457.appspot.com",
  messagingSenderId: "9281371389",
  appId: "1:9281371389:web:860764d06e798715d79294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 