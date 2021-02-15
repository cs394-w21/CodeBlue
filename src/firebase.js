import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDDa_vSHp-ibrigfe8zlNtsq6s2s1SJXAg",
    authDomain: "blue-team-client-project.firebaseapp.com",
    databaseURL: "https://blue-team-client-project-default-rtdb.firebaseio.com",
    projectId: "blue-team-client-project",
    storageBucket: "blue-team-client-project.appspot.com",
    messagingSenderId: "996153796312",
    appId: "1:996153796312:web:572a1c670b249aa0b7d9ad",
    measurementId: "G-WEXVC1XCGR"
};

firebase.initializeApp(firebaseConfig);

export default firebase;