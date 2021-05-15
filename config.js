import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyCZyWu9oAyX4HUX5TmHyRcd4aAEFm3oBD0",
  authDomain: "wily-85d89.firebaseapp.com",
     databaseURL: "https://wily-85d89.firebaseio.com",
  projectId: "wily-85d89",
  storageBucket: "wily-85d89.appspot.com",
  messagingSenderId: "777973083583",
  appId: "1:777973083583:web:8d0b1a6bd33712c478c50a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()