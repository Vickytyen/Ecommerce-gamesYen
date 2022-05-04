// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOm0K4l6w4oft75ukX9ynSYPnED3HOdDc",
  authDomain: "coder-9d7ce.firebaseapp.com",
  projectId: "coder-9d7ce",
  storageBucket: "coder-9d7ce.appspot.com",
  messagingSenderId: "474665540836",
  appId: "1:474665540836:web:f5f9a9b599f24c507ce0f1",
  measurementId: "G-X7DYCDFT24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

