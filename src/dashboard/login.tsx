import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import firebase from "firebase";

const LoginView = () => {
  const login = () => {
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const promise = auth.signInWithPopup(provider);

    promise
      .then((user) => {
        console.log(user);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Card>
      <Card.Header>Login</Card.Header>
      <Card.Body>
        <Button onClick={login}>Login</Button>
      </Card.Body>
    </Card>
  );
};

export default LoginView;
