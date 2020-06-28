import React from "react";
import "./theme/bootstrap.min.css";
import "./theme/font.css";
import Landing from "./features/Landing";

import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBEi0t_y8cf63oZQKlOr9tWk7uTTqWPBzs",
  authDomain: "myreactcv.firebaseapp.com",
  databaseURL: "https://myreactcv.firebaseio.com",
  projectId: "myreactcv",
  storageBucket: "myreactcv.appspot.com",
  messagingSenderId: "106001085349",
  appId: "1:106001085349:web:cb9ad8c73ee14609dd6e4c",
  measurementId: "G-ZMY2K27HQ6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const App = () => {
  return <Landing />;
};

export default App;
