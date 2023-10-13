// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mega-project-5b875.firebaseapp.com",
  projectId: "mega-project-5b875",
  storageBucket: "mega-project-5b875.appspot.com",
  messagingSenderId: "484105887999",
  appId: "1:484105887999:web:6a9c00386580b47fb5acca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);