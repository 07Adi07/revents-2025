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
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

declare global {
  // eslint-disable-next-line no-var
  var FIREBASE_APPCHECK_DEBUG_TOKEN: boolean | string | undefined;
}

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

if (import.meta.env.DEV) {
  FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LcduVcqAAAAAPqV_NENBw00RivZ6eNPyja7c3Ke"),
  isTokenAutoRefreshEnabled: true,
});

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const fb = getDatabase();
