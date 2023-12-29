import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPM_CBZb6ytrtxWVlYS67sy5TsNeRPElE",
    authDomain: "abcd-f93da.firebaseapp.com",
    projectId: "abcd-f93da",
    storageBucket: "abcd-f93da.appspot.com",
    messagingSenderId: "607053240626",
    appId: "1:607053240626:web:cd7f6eb8c8487f8aff5f2b"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;