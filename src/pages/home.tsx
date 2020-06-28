import React from "react";
import { CV } from "../types";
import { Container, FormGroup } from "react-bootstrap";
import EditHome from "../widgets/EditHome";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: 100px;
  margin-right: 200px;

  p {
    font-size: 25px;
  }

  span {
    margin-left: 30px;
  }
`;

type Props = {
  cv: CV;
  updateCv?: any;
  auth?: boolean;
  pending: boolean;
};

const HomePage = (props: Props) => {
  const { cv } = props;

  return (
    <Wrapper>
      <div
        className="row align-items-center"
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <Container>
          <h1>
            {cv.pages.home.title}
            {props.auth && (
              <>
                <span>
                  <EditHome
                    cv={cv}
                    updateCv={props.updateCv}
                    pending={props.pending}
                  />
                </span>
              </>
            )}
          </h1>

          <hr></hr>
          <p>{cv.pages.home.body}</p>
        </Container>
      </div>
    </Wrapper>
  );
};

export default HomePage;
