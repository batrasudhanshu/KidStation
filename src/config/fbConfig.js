import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyDq04WRqAxU9kYFywe1M0_2tJhCVpEfUag",
    authDomain: "kidstation-version1.firebaseapp.com",
    databaseURL: "https://kidstation-version1.firebaseio.com",
    projectId: "kidstation-version1",
    storageBucket: "kidstation-version1.appspot.com",
    messagingSenderId: "211282101734",
    appId: "1:211282101734:web:0ff6d235c419599fcc0227",
    measurementId: "G-1E0BX074Z1"
  };


firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
const storage = firebase.storage();

export {
    storage, firebase as default
} 