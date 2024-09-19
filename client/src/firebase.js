// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCViRkaCoQ5ITlkGXxCl8ZaaeNkAgG6nBk",
  authDomain: "dashboard-b3c51.firebaseapp.com",
  databaseURL: "https://dashboard-b3c51-default-rtdb.firebaseio.com",
  projectId: "dashboard-b3c51",
  storageBucket: "dashboard-b3c51.appspot.com",
  messagingSenderId: "1071947822761",
  appId: "1:1071947822761:web:447e2497d6bd8cdf65dbb8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
