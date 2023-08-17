import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const app = initializeApp({
  apiKey: "AIzaSyCss-36WyJgeec_qnG0fkN6UvFkfdj4_0g",
  authDomain: "auth-demo-5e0f6.firebaseapp.com",
  projectId: "auth-demo-5e0f6",
  storageBucket: "auth-demo-5e0f6.appspot.com",
  messagingSenderId: "10110540650",
  appId: "1:10110540650:web:c1aed31c2cff7d0bc3e31"
});

export const auth = getAuth(app);
export default app;
