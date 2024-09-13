// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0WoGq-winmv2bpwC6CXqowBI_93dG9Wo",
  authDomain: "lcl-hackathon-e12-sbox-92e5.firebaseapp.com",
  projectId: "lcl-hackathon-e12-sbox-92e5",
  storageBucket: "lcl-hackathon-e12-sbox-92e5.appspot.com",
  messagingSenderId: "771318620526",
  appId: "1:771318620526:web:357499d497a0f243a1a17f",
  measurementId: "G-ZD0Q05W93Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
