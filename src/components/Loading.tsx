import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading = () => (
  <Container
    className="d-flex justify-content-center"
    style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
  >
    <Spinner className="mr-4" animation="grow" variant="primary" />
    <Spinner className="mr-4" animation="grow" variant="success" />
    <Spinner className="mr-4" animation="grow" variant="danger" />
    <Spinner animation="grow" variant="warning" />
  </Container>
);

export default Loading;
