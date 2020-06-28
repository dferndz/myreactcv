import React from "react";
import "../theme/bootstrap.min.css";
import "../theme/font.css";
import Landing from "../features/Landing";
import GetApi from "../features/GetApi";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import firebase from "firebase";
import { firebaseConfig } from "../firebase.config";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/get-api">
          <GetApi />
        </Route>
        <Route>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
