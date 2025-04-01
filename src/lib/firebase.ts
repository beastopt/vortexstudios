
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
  authDomain: "vortexstudios.firebaseapp.com",
  projectId: "vortexstudios",
  storageBucket: "vortexstudios.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:a1b2c3d4e5f67890abcdef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
