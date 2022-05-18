// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrxqEeRi217qAQXWZaPunnGIBAsAG0sCo",
  authDomain: "to-do-app-adc14.firebaseapp.com",
  projectId: "to-do-app-adc14",
  storageBucket: "to-do-app-adc14.appspot.com",
  messagingSenderId: "157935074951",
  appId: "1:157935074951:web:1582a130023d61fa9f4222",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
