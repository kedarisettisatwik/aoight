import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // Import Firestore module

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhDpiRoxpKIPlAYeocGS2yKZIe-gJmpAA",
  authDomain: "vibechats.firebaseapp.com",
  projectId: "vibechats",
  storageBucket: "vibechats.appspot.com",
  messagingSenderId: "571105366034",
  appId: "1:571105366034:web:b29b598221cdbfa03788cb"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;