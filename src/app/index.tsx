import React from "react";
import "../theme/bootstrap.min.css";
import "../theme/font.css";
import Landing from "../features/Landing";

import firebase from "firebase";
import { firebaseConfig } from "../firebase.config";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const App = () => {
  return <Landing />;
};

export default App;
