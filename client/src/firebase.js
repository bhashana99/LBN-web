// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lbn-web.firebaseapp.com",
  projectId: "lbn-web",
  storageBucket: "lbn-web.appspot.com",
  messagingSenderId: "94126810524",
  appId: "1:94126810524:web:5ee762f7126270bfe71459",
  measurementId: "G-BB0CXWRJGG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);