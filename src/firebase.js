import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnKvpUSBZLi5H_bZPRBOB7s8jXLEm-qVY",
  authDomain: "clone-490f8.firebaseapp.com",
  projectId: "clone-490f8",
  storageBucket: "clone-490f8.appspot.com",
  messagingSenderId: "784391955924",
  appId: "1:784391955924:web:69b1539deb27eb49286241",
  measurementId: "G-3P3LD85MTR"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
