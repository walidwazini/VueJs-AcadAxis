// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "vue-acadaxis.firebaseapp.com",
  projectId: "vue-acadaxis",
  storageBucket: "vue-acadaxis.appspot.com",
  messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase.firestore()