import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFZ4j_q22AZJCQXUKNBOkPCfA_IxoT9wk",
    authDomain: "compra-en-casa-db.firebaseapp.com",
    projectId: "compra-en-casa-db",
    storageBucket: "compra-en-casa-db.appspot.com",
    messagingSenderId: "569677183213",
    appId: "1:569677183213:web:6c90c494aa9619b92934e4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()


  export default {
    firebase,
    db,
  }