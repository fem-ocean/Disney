import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBQ6uWhWfztKYYXjBQAfGSAMKA2cipgNlw",
    authDomain: "disneyplus-clone-d3b09.firebaseapp.com",
    projectId: "disneyplus-clone-d3b09",
    storageBucket: "disneyplus-clone-d3b09.appspot.com",
    messagingSenderId: "1035038465453",
    appId: "1:1035038465453:web:b334717a6cb626535ed524",
    measurementId: "G-LJ5FWX1WXL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) //initialize the app

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider(); //FOR AUTHENTICATION login popup

  const storage = firebase.storage() //storing of pictures and videos



  export { auth, provider, storage };
  export default db;