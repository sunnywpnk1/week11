// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwar6OInzhy9J_XdB0BmdjpIfkUPwqE5o",
  authDomain: "mobile2025-e4d7f.firebaseapp.com",
  projectId: "mobile2025-e4d7f",
  storageBucket: "mobile2025-e4d7f.firebasestorage.app",
  messagingSenderId: "272447833481",
  appId: "1:272447833481:web:3f94d9dc02ebb997b44d58",
  measurementId: "G-JQFD4BTKRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export