import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe26Ex0Sn0DHlTj5HCLNZVM4DSBaq2NFY",
  authDomain: "challenge-865c6.firebaseapp.com",
  projectId: "challenge-865c6",
  storageBucket: "challenge-865c6.appspot.com",
  messagingSenderId: "1081452516644",
  appId: "1:1081452516644:web:4d3cc32084c79c1b214fb1",
  measurementId: "G-2JQV2ESDMK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
