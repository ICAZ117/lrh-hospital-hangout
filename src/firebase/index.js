import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDogzvpkEZzJ0xX0XGmkn9zirHuqQKQ_Xs",
  authDomain: "healthcare-hangout.firebaseapp.com",
  projectId: "healthcare-hangout",
  storageBucket: "healthcare-hangout.firebasestorage.app",
  messagingSenderId: "918158787059",
  appId: "1:918158787059:web:6d3bed3e63af1f1dc0d286",
  measurementId: "G-GRJ08VH0NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }