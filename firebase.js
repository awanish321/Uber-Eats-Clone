// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDSGLY8cucPBzgl-hQh1Ert6tVtr00JxDI",
    authDomain: "rn-uber-eats-9621f.firebaseapp.com",
    projectId: "rn-uber-eats-9621f",
    storageBucket: "rn-uber-eats-9621f.appspot.com",
    messagingSenderId: "387856303907",
    appId: "1:387856303907:web:09304cffefa8e1f8606e96"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
