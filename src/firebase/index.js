import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB-2-ps3_We5ic5DS9UBHHSczTlH6UEBvY",
  authDomain: "lrh-hospital-hangout.firebaseapp.com",
  projectId: "lrh-hospital-hangout",
  storageBucket: "lrh-hospital-hangout.firebasestorage.app",
  messagingSenderId: "70699803425",
  appId: "1:70699803425:web:9e21d4aea2670586275460"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }