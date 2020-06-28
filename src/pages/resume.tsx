import React from "react";
import { CV } from "../types";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 100px;
  margin-right: 200px;

  p {
    font-size: 25px;
  }
`;

type Props = {
  cv: CV;
  updateCv?: any;
};

const ResumePage = (props: Props) => {
  const { cv } = props;

  return (
    <Wrapper>
      <div
        className="row align-items-center"
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <Container>
          <h1>Resume</h1>
        </Container>
      </div>
    </Wrapper>
  );
};

export default ResumePage;
