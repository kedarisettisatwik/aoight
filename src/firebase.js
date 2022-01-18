import { getFirestore } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB2JXopwTJxwKT6kDMXWp-IH50_E-6jwRo",
  authDomain: "react-aoight.firebaseapp.com",
  databaseURL: "https://react-aoight-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-aoight",
  storageBucket: "react-aoight.appspot.com",
  messagingSenderId: "166575933341",
  appId: "1:166575933341:web:5e065da801177535689174"
};

const app = initializeApp(firebaseConfig);
const base = getFirestore(app);

export default base;