import React from "react";
import { School } from "../types";

type Props = {
  item: School;
};

const SchoolItem = (props: Props) => {
  const { item } = props;
  return (
    <div style={{ marginBottom: "60px" }}>
      <p className="about-text">{item.name}</p>
      <span>
        <strong>{item.degree}</strong>
      </span>
      {` - `}
      <span>
        <strong>{item.major}</strong>
      </span>
      <br />
      <br />
      <p>{item.details}</p>
    </div>
  );
};

export default SchoolItem;
