// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_Measurement_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
