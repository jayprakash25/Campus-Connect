// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfy8aDSxRVNP1pSzyAPArTTcCcmUlf8jU",
  authDomain: "campus-connect-e14b1.firebaseapp.com",
  projectId: "campus-connect-e14b1",
  storageBucket: "campus-connect-e14b1.appspot.com",
  messagingSenderId: "673790891448",
  appId: "1:673790891448:web:3638cc7bdb76ae9dbbab4d",
  measurementId: "G-7XB8NLT3Q2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, db, storage };
