// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGwIQmR4_oMQSgk5PZp3v6j0euLF1T444",
  authDomain: "projectreact-cfe56.firebaseapp.com",
  projectId: "projectreact-cfe56",
  storageBucket: "projectreact-cfe56.appspot.com",
  messagingSenderId: "169389905147",
  appId: "1:169389905147:web:cb80c7fd006f2c5c418c5e",
  measurementId: "G-34FWGRTVPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);

export {app, auth};