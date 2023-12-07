import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNuHUXLL9GimiMcL7SMLMuV_zZvMxBUKs",
  authDomain: "studentrecords-fbf2a.firebaseapp.com",
  projectId: "studentrecords-fbf2a",
  storageBucket: "studentrecords-fbf2a.appspot.com",
  messagingSenderId: "675247964112",
  appId: "1:675247964112:web:509c6fdc0ea089e338c3d5",
  measurementId: "G-GQYC72N4VL"
};

// initialized firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);