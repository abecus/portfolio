import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAeTYgbjow7714i7DOKFIDnixm2BqOojNE",
    authDomain: "portfolio-one4.firebaseapp.com",
    databaseURL: "https://portfolio-one4.firebaseio.com",
    projectId: "portfolio-one4",
    storageBucket: "portfolio-one4.appspot.com",
    messagingSenderId: "582711364657",
    appId: "1:582711364657:web:842759b563b46147a7d910",
    measurementId: "G-S0Q6MS7M5F"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export default firebase;