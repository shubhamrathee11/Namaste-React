// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeP1MqgQzo3u-FMKqsihR9L7Wqi3OS5ps",
  authDomain: "foodtail-90fd3.firebaseapp.com",
  projectId: "foodtail-90fd3",
  storageBucket: "foodtail-90fd3.firebasestorage.app",
  messagingSenderId: "661311915979",
  appId: "1:661311915979:web:daf56c3e6e3ad446be984e",
  measurementId: "G-G60KQVDQHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);