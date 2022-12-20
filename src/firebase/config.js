
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "eshop-dcd0b.firebaseapp.com",
  projectId: "eshop-dcd0b",
  storageBucket: "eshop-dcd0b.appspot.com",
  messagingSenderId: "988967196164",
  appId: "1:988967196164:web:03240cec0f690f36b98751"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app