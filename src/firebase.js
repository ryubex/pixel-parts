import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCA5oTO3p6u5ydIai_6tEOtSIYSydy8t68",
  authDomain: "pixelparts-554ff.firebaseapp.com",
  projectId: "pixelparts-554ff",
  storageBucket: "pixelparts-554ff.firebasestorage.app",
  messagingSenderId: "518791077324",
  appId: "1:518791077324:web:6316f3a49d4344dc8d1169",
  measurementId: "G-D7S89QN4DH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);