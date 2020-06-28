import React from "react";
import { CV } from "../types";
import { Container, Badge } from "react-bootstrap";
import styled from "styled-components";
import SchoolItem from "../widgets/SchoolItem";
import JobItem from "../widgets/JobItem";
import SkillItem from "../widgets/SkillItem";
import AboutSction from "../components/AboutSction";
import EditAboutMe from "../widgets/EditAboutMe";
import EditSkills from "../widgets/EditSkills";
import EditExperience from "../widgets/EditExperience";
import EditEducation from "../widgets/EditEducation";

const Wrapper = styled.div`
  margin-left: 100px;
  margin-right: 200px;

  p.about-text {
    margin-bottom: 0px;
    font-size: 25px;
  }

  span.skill {
    font-size: 25px;
  }
`;

type Props = {
  cv: CV;
  updateCv: any;
  auth: boolean;
  pending: boolean;
};

const AboutPage = (props: Props) => {
  const { cv } = props;
  const editProps = { ...props };

  return (
    <Wrapper>
      <div
        className="row align-items-center"
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <Container className="overflow-auto" style={{ marginTop: "60px" }}>
          <h1>
            {cv.pages.about.title}
            {props.auth && (
              <EditAboutMe
                cv={cv}
                updateCv={props.updateCv}
                pending={props.pending}
              />
            )}
          </h1>

          <p className="about-text">{cv.pages.about.body}</p>

          <AboutSction
            auth={props.auth}
            title="Skills"
            items={cv.skills}
            Component={SkillItem}
            EditComponent={<EditSkills {...editProps} />}
          />

          <AboutSction
            auth={props.auth}
            title="Experience"
            items={cv.jobs}
            Component={JobItem}
            EditComponent={<EditExperience {...editProps} />}
          />
          <AboutSction
            auth={props.auth}
            title="Education"
            items={cv.schools}
            Component={SchoolItem}
            EditComponent={<EditEducation {...editProps} />}
          />
        </Container>
      </div>
    </Wrapper>
  );
};

export default AboutPage;
