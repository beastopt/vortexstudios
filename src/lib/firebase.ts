
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "vortexstudios.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "vortexstudios",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "vortexstudios.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "1234567890",
  appId: process.env.FIREBASE_APP_ID || "1:1234567890:web:a1b2c3d4e5f67890abcdef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
