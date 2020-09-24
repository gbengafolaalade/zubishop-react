import firebase from "firebase/app";
import "firebase/storage";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA3XUTrxuq4Oaf10_zCbebyEd84A-n2O-k",
  authDomain: "e-commerce-app-9b0e2.firebaseapp.com",
  databaseURL: "https://e-commerce-app-9b0e2.firebaseio.com",
  projectId: "e-commerce-app-9b0e2",
  storageBucket: "e-commerce-app-9b0e2.appspot.com",
  messagingSenderId: "351236921481",
  appId: "1:351236921481:web:5d485dd9c3dbbf9b614e58",
  measurementId: "G-EZ9MX40P82",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const Storage = firebase.storage();

export { Storage, firebase as default };
