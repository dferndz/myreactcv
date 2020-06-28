import React from "react";
import { Project } from "../types";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const Wrapper = styled.div`
  span {
    font-size: 16px;
  }
`;

type Props = {
  item: Project;
};

const ProjectItem = (props: Props) => {
  const { item } = props;
  return (
    <Card className="mb-4">
      <Card.Body>
        <Wrapper>
          <h3>{item.name}</h3>
          <hr />
          {item.img && (
            <>
              <img src={item.img} className="img img-fluid" />
              <br />
            </>
          )}
          {item.details && (
            <>
              <br />
              <span>{item.details}</span>
              <br />
              <br />
            </>
          )}
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              className="btn btn-secondary mt-2"
            >
              View project
            </a>
          )}
        </Wrapper>
      </Card.Body>
    </Card>
  );
};

export default ProjectItem;
