import React from "react";
import { Job } from "../types";
import { Badge } from "react-bootstrap";

type Props = {
  item: Job;
};

const SkillItem = (props: Props) => {
  const { item } = props;
  return (
    <span className="skill">
      <Badge variant="primary">{item}</Badge>{" "}
    </span>
  );
};

export default SkillItem;
