import React from "react";
import { CV } from "../types";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import AboutSction from "../components/AboutSction";
import ProjectItem from "../widgets/ProjectItem";
import EditProjects from "../widgets/EditProjects";

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
  auth: boolean;
  pending: boolean;
};

const ProjectsPage = (props: Props) => {
  const { cv } = props;

  return (
    <Wrapper>
      <div
        className="row align-items-center"
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <Container>
          <AboutSction
            title="Projects"
            items={cv.projects}
            Component={ProjectItem}
            auth={props.auth}
            EditComponent={
              <EditProjects
                cv={cv}
                updateCv={props.updateCv}
                pending={props.pending}
              />
            }
          />
        </Container>
      </div>
    </Wrapper>
  );
};

export default ProjectsPage;
