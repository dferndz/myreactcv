import React from "react";
import { Job } from "../types";

type Props = {
  item: Job;
};

const JobItem = (props: Props) => {
  const { item } = props;
  return (
    <div style={{ marginBottom: "60px" }}>
      <p className="about-text">{item.employer}</p>
      {item.department && (
        <>
          {" "}
          <span>
            <strong>{item.department}</strong>
          </span>
          {` - `}
        </>
      )}
      <span>
        <strong>{item.position}</strong>
      </span>
      <br />
      <br />
      <p>{item.details}</p>
    </div>
  );
};

export default JobItem;
