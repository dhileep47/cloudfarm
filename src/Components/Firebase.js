import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBqEDO7Oo8DIIYxHd58D-G32Z9SDvTnwrA",
  authDomain: "cloudfarm-15287.firebaseapp.com",
  projectId: "cloudfarm-15287",
  storageBucket: "cloudfarm-15287.appspot.com",
  messagingSenderId: "230875386621",
  appId: "1:230875386621:web:8ba7d903c82bc4d6d2a494",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.analytics();

//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBqEDO7Oo8DIIYxHd58D-G32Z9SDvTnwrA",
//   authDomain: "cloudfarm-15287.firebaseapp.com",
//   projectId: "cloudfarm-15287",
//   storageBucket: "cloudfarm-15287.appspot.com",
//   messagingSenderId: "230875386621",
//   appId: "1:230875386621:web:8ba7d903c82bc4d6d2a494",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export default firebaseApp;
