import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAY23sI6Y5_irOj3WoxJpUq4lwtoa-L5G0",
  authDomain: "chat-app-aeedd.firebaseapp.com",
  projectId: "chat-app-aeedd",
  storageBucket: "chat-app-aeedd.appspot.com",
  messagingSenderId: "913983364566",
  appId: "1:913983364566:web:86ecc726130412fae8d877",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
