// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALSki2HCnher-yz45qAF7ZgOi6vQ1XlZY",
  authDomain: "raumbeck.firebaseapp.com",
  projectId: "raumbeck",
  storageBucket: "raumbeck.appspot.com",
  messagingSenderId: "698680246709",
  appId: "1:698680246709:web:d46e71bc7a981002ac19fc",
  measurementId: "G-FYR4S907YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);