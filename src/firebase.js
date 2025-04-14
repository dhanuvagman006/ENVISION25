
const firebaseConfig = {
  apiKey: "AIzaSyA9KZa-O7enbMfcVKEpimQir4NIb9IxgmA",
  authDomain: "envision25-e45cb.firebaseapp.com",
  projectId: "envision25-e45cb",
  storageBucket: "envision25-e45cb.firebasestorage.app",
  messagingSenderId: "119965388583",
  appId: "1:119965388583:web:c94d67630d9fadd862e302"
};
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup };
