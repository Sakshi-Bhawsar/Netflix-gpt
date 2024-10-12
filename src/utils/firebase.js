// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEY1fS2_XPrXT2ydPGm2CxkrKBjYq0lMY",
  authDomain: "netflixgpt-e4614.firebaseapp.com",
  projectId: "netflixgpt-e4614",
  storageBucket: "netflixgpt-e4614.appspot.com",
  messagingSenderId: "987246939225",
  appId: "1:987246939225:web:bf2216ebc6d61f1202f548",
  measurementId: "G-YS8JG50G2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();