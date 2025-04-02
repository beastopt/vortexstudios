import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhMSMXzx7DGC5EIMSvACSqSV4idSkO2Oo",
  authDomain: "vortexstudios5.firebaseapp.com",
  projectId: "vortexstudios5",
  storageBucket: "vortexstudios5.appspot.com",
  messagingSenderId: "17609762458",
  appId: "1:17609762458:web:YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
