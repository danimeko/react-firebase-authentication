import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "your api key",
    authDomain: "reactlogin-7aaba.firebaseapp.com",
    databaseURL: "https://reactlogin-7aaba.firebaseio.com",
    projectId: "reactlogin-7aaba",
    storageBucket: "reactlogin-7aaba.appspot.com",
    messagingSenderId: "14958295211"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

const auth = firebase.auth();
const db = firebase.database();

export {
  auth,
  db,
};
