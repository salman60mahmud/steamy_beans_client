// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLtVigrbZzT_xd_qj6bTP3V2OLMMWGHsA",
  authDomain: "steamybeans-20173.firebaseapp.com",
  projectId: "steamybeans-20173",
  storageBucket: "steamybeans-20173.firebasestorage.app",
  messagingSenderId: "924339598832",
  appId: "1:924339598832:web:03a6b685ccae5ebe06d935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;