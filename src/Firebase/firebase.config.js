// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz0k4UoXnoM6BEjKp-g14vIloT0CI77Qk",
  authDomain: "dragon-newspeaper.firebaseapp.com",
  projectId: "dragon-newspeaper",
  storageBucket: "dragon-newspeaper.firebasestorage.app",
  messagingSenderId: "1052574556936",
  appId: "1:1052574556936:web:c704e93c483621ef5842bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;