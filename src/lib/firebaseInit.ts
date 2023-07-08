// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPjjMwnv0M_BgHkpzkcNR8GW2yl-HdmQY",
  authDomain: "wedding-8dc59.firebaseapp.com",
  projectId: "wedding-8dc59",
  storageBucket: "wedding-8dc59.appspot.com",
  messagingSenderId: "215678225798",
  appId: "1:215678225798:web:73ef1764d6d4344e90b007",
  measurementId: "G-0EMBYJCZ1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }