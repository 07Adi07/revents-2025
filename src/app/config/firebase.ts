// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "revents---2024.firebaseapp.com",
  projectId: "revents---2024",
  databaseURL:
    "https://revents---2024-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "revents---2024.appspot.com",
  messagingSenderId: "708675613702",
  appId: "1:708675613702:web:736a042581f33220e73f87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const fb = getDatabase();
