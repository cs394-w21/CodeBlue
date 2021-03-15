import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/database";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: {FIREBASE_API_KEY},// replace with your Firebase API key,
  authDomain: "blue-team-client-project.firebaseapp.com",
  databaseURL: "https://blue-team-client-project-default-rtdb.firebaseio.com",
  projectId: "blue-team-client-project",
  messagingSenderId: "996153796312",
  appId: "1:996153796312:web:572a1c670b249aa0b7d9ad",
  measurementId: "G-WEXVC1XCGR",
  storageBucket: 'gs://blue-team-client-project.appspot.com/'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
