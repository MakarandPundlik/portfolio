import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCXmu7-dLoYHZpO8Vvn_0BoLhqczuu9PUo",
    authDomain: "portfolio-9b00b.firebaseapp.com",
    projectId: "portfolio-9b00b",
    storageBucket: "portfolio-9b00b.appspot.com",
    messagingSenderId: "975340328480",
    appId: "1:975340328480:web:eda3580cc5aa5cb1cb4e45"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;