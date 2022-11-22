import firebase from "firebase"
import "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyCRw-b9k1JOAtk-lBID7cBJYR685j1pXkE",
    authDomain: "trabfinal-f2ce5.firebaseapp.com",
    projectId: "trabfinal-f2ce5",
    storageBucket: "trabfinal-f2ce5.appspot.com",
    messagingSenderId: "277675261944",
    appId: "1:277675261944:web:444be0a5f61523afd8e00d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore()
  export default database