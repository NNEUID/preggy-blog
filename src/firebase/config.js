import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA9CzsdZLIXuiLvDMgViPdI919gUxmPvcA",
  authDomain: "nneuidhd.firebaseapp.com",
  projectId: "nneuidhd",
  storageBucket: "nneuidhd.appspot.com",
  messagingSenderId: "198768930052",
  appId: "1:198768930052:web:0980f98b242a02ffd4b451"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firebase()

export {
  projectFirestore
}