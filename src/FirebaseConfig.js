import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBi3JNWk6Hj0z9l_YmQrHr88c08cxpERfU",
    authDomain: "instaclone-cd42c.firebaseapp.com",
    projectId: "instaclone-cd42c",
    storageBucket: "instaclone-cd42c.appspot.com",
    messagingSenderId: "314268967302",
    appId: "1:314268967302:web:5c287410232bf261728c07"
  };
  
 const FirebaseApp= firebase.initializeApp(firebaseConfig);
 const db=FirebaseApp.firestore();
 const auth=firebase.auth();
 const storage=firebase.storage();
 export {db,auth,storage};