// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnavzqVfpaJopjHra460NXmqwz63ODamI",
  authDomain: "sesau-e-sus.firebaseapp.com",
  projectId: "sesau-e-sus",
  storageBucket: "sesau-e-sus.firebasestorage.app",
  messagingSenderId: "161747926319",
  appId: "1:161747926319:web:9355cf786f5e5142bd35da",
  measurementId: "G-878YFT9VQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);