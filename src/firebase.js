// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnJCmVizBvZWlY4F2syFjWX0Ni4UjvjqY",
  authDomain: "slack-clone-f0d19.firebaseapp.com",
  projectId: "slack-clone-f0d19",
  storageBucket: "slack-clone-f0d19.appspot.com",
  messagingSenderId: "238641722763",
  appId: "1:238641722763:web:bfe2392dc3f7f0e0352b8e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }