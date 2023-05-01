import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyDlx2TjS2sycxZB1XIWVDFyvNMIvrplNlM",
    authDomain: "derraco-p.firebaseapp.com",
    projectId: "derraco-p",
    storageBucket: "derraco-p.appspot.com",
    messagingSenderId: "495650592803",
    appId: "1:495650592803:web:80a23e7baf89ecda4df996"
  };

  
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();