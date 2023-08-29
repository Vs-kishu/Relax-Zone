// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "ai-netflix.firebaseapp.com",
  projectId: "ai-netflix",
  storageBucket: "ai-netflix.appspot.com",
  messagingSenderId: process.env.REACT_APP_MSG_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_Measurement_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
