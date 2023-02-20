import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAicdVrNhHCq3yvjp17HwUhos1CZ6FPFvI",
  authDomain: "clone-ns-challenge.firebaseapp.com",
  projectId: "clone-ns-challenge",
  storageBucket: "clone-ns-challenge.appspot.com",
  messagingSenderId: "165453954604",
  appId: "1:165453954604:web:c4b35aa7b8329a6a02db89",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
