import React, { useState, useEffect } from "react";
import { Card, Container, Col, Row, Modal } from "react-bootstrap";
import useMycv from "../hooks/useMycv";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CV, EmptyCv } from "../types";
import Loading from "../components/Loading";
import Sidebar from "../widgets/sidebar";
import * as firebase from "firebase/app";

import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ProjectsPage from "../pages/projects";
import ResumePage from "../pages/resume";
import NotFound from "../pages/not-found";

const PageContainer = () => {
  const [alert, setAlert] = useState<any>(null);
  const [cv, setcv] = useState<CV>(EmptyCv);
  const [auth, setAuth] = useState(false);
  const { data, pending, update, fetching, error } = useMycv();

  useEffect(() => {
    if (data) setcv(data);
  }, [data]);

  useEffect(() => {
    if (error)
      setAlert({
        title: "Error",
      });
  }, [error]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.uid === process.env.REACT_APP_CV_API) setAuth(true);
        else {
          firebase.auth().signOut();
          setAlert({
            title: "Invalid credentials",
            description: "You do not own this website",
          });
        }
      } else {
        setAuth(false);
      }
    });
  }, []);

  const logOut = () => {
    firebase.auth().signOut();
  };

  const logIn = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  const updateCv = async (cv: CV) => {
    await update(cv).then(() => {
      setAlert({
        title: "Data saved!",
        description: "Successfully saved your information",
      });
    });
  };

  if (fetching) return <Loading />;
  return (
    <Router>
      <Row>
        <Col md={3}></Col>
        <Col md={3} className="position-fixed">
          <Sidebar cv={cv} logIn={logIn} logOut={logOut} auth={auth} />
        </Col>

        <Col md={9}>
          <Switch>
            <Route exact path="/">
              <HomePage
                cv={cv}
                updateCv={updateCv}
                auth={auth}
                pending={pending}
              />
            </Route>
            <Route exact path="/about">
              <AboutPage
                cv={cv}
                updateCv={updateCv}
                auth={auth}
                pending={pending}
              />
            </Route>
            <Route exact path="/projects">
              <ProjectsPage
                cv={cv}
                updateCv={updateCv}
                auth={auth}
                pending={pending}
              />
            </Route>
            <Route exact path="/resume">
              <ResumePage cv={cv} updateCv={updateCv} />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Col>
      </Row>
      <Modal show={alert ? true : false} onHide={() => setAlert(null)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {alert && alert.title ? alert.title : "alert"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {alert && alert.description
            ? alert.description
            : "Something went wrong..."}
        </Modal.Body>
      </Modal>
    </Router>
  );
};

export default PageContainer;
