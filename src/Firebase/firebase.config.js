// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZpwrp4dq5U7qFiwtdr4ejfHJ9vYnld8M",
  authDomain: "crowd-funding-85c71.firebaseapp.com",
  projectId: "crowd-funding-85c71",
  storageBucket: "crowd-funding-85c71.firebasestorage.app",
  messagingSenderId: "798440462003",
  appId: "1:798440462003:web:b96923747113a9294c02c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);