// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYtFBR8AlXqwsle6x6BRe63eR9esHg8Nc",
  authDomain: "recess-a64f0.firebaseapp.com",
  projectId: "recess-a64f0",
  storageBucket: "recess-a64f0.appspot.com",
  messagingSenderId: "160501038427",
  appId: "1:160501038427:web:1d468d06b283544903ee7e",
  measurementId: "G-WF7YFCB8ZH",
};

// Initialize Firebase
// const analytics = getAnalytics(app);

// const app = !getApp().length ? initializeApp(firebaseConfig) : getApp()
const app = initializeApp(firebaseConfig);
const firestore = getFirestore()
const auth = getAuth(app)
const storage = getStorage(app)

export { app, firestore, auth, storage };
