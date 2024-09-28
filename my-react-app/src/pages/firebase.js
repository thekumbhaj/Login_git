// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
  apiKey: "AIzaSyAYdUFmGvSb5Bhm-9xqJfbWwqCnsCr22ek",
  authDomain: "kumbhajtech.firebaseapp.com",
  projectId: "kumbhajtech",
  storageBucket: "kumbhajtech.appspot.com",
  messagingSenderId: "1070064288837",
  appId: "1:1070064288837:web:a0c9d8daf80718461e8f2c",
  measurementId: "G-12BTS2DCT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Providers for GitHub and Google
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
