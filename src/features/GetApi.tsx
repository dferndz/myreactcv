import React, { useState, useEffect, useRef } from "react";
import * as firebase from "firebase/app";
import {
  Container,
  Col,
  Row,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import GoogleBtn from "../assets/google_btn_blue.png";
import { FiCopy } from "react-icons/fi";
import useMycv from "../hooks/useMycv";

const DisplayApi = () => {
  const api = firebase.auth().currentUser?.uid;
  const apiRef = useRef<any>();
  const { data } = useMycv();

  return (
    <div>
      <h4>Your API key: </h4>
      <Col xs="auto">
        <InputGroup className="mb-2">
          <Form.Control
            onChange={() => {}}
            ref={apiRef}
            id="inlineFormInputGroup"
            value={api}
          />
          <InputGroup.Prepend>
            <Button
              onClick={() => {
                apiRef.current.select();
                document.execCommand("copy");
              }}
              variant="outline-secondary"
            >
              <FiCopy />
            </Button>
          </InputGroup.Prepend>
        </InputGroup>
      </Col>

      <hr />
      <h4>
        <strong>IMPORTANT</strong>
      </h4>
      <br />

      <p>
        To run the app in a host other than localhost, please send your domain
        name (yourdomain.com) to{" "}
        <a
          href={`mailto:${data.profile.email}?subject=Add domain to CV Oauth&body=My API: ${api} and my domain is: `}
        >
          {data.profile.email}
        </a>
        . We will add your domain as quick as possible so that you can
        authenticate and edit your info.
      </p>

      <br />
    </div>
  );
};

const GetApi = () => {
  const [auth, setAuth] = useState(false);

  const logOut = () => {
    firebase.auth().signOut();
  };

  const logIn = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center mt-4">
        <Col md={8}>
          <Card>
            <Card.Body className="text-center">
              <h3>Get your API key</h3>
              <hr></hr>
              {auth ? (
                <>
                  <DisplayApi />
                  <Button onClick={logOut}>Sign out</Button>
                </>
              ) : (
                <>
                  <p>Sign in with a Google account to obtain an API key</p>
                  <img
                    onClick={logIn}
                    className="img img-fluid btn"
                    src={GoogleBtn}
                  />
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GetApi;
