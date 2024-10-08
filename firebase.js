// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyEZ_3r_4RIxRwOWUVXK08P83_-21HBAY",
  authDomain: "finentialadm.firebaseapp.com",
  databaseURL: "https://finentialadm-default-rtdb.firebaseio.com",
  projectId: "finentialadm",
  storageBucket: "finentialadm.appspot.com",
  messagingSenderId: "5279990838",
  appId: "1:5279990838:web:cfa60c4ae60849e643c497"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
export const auth = getAuth(app);
export default db