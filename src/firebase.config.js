import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAb3RxERUexqrXHCt_q1q3ELRt-IOMXHBQ",
  authDomain: "wave3-4b933.firebaseapp.com",
  projectId: "wave3-4b933",
  storageBucket: "wave3-4b933.firebasestorage.app",
  messagingSenderId: "751659395009",
  appId: "1:751659395009:web:cda8da1083b45a807e7140"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
