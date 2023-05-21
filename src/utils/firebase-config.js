// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWEiqCTlndzy--kEycjiArJZ6N9uDK8Ow",
    authDomain: "react-netflix-clone-e8c12.firebaseapp.com",
    projectId: "react-netflix-clone-e8c12",
    storageBucket: "react-netflix-clone-e8c12.appspot.com",
    messagingSenderId: "724692729623",
    appId: "1:724692729623:web:6b6fa068ad13f1aa3bc152",
    measurementId: "G-W2CPT2W947"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth= getAuth(app);