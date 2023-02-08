import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9CzsdZLIXuiLvDMgViPdI919gUxmPvcA",
  authDomain: "nneuidhd.firebaseapp.com",
  projectId: "nneuidhd",
  storageBucket: "nneuidhd.appspot.com",
  messagingSenderId: "198768930052",
  appId: "1:198768930052:web:0980f98b242a02ffd4b451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
  db
}