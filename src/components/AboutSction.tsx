import React from "react";
import styled from "styled-components";
import { CV } from "../types";

const Wrapper = styled.div`
  margin-top: 60px;
`;

type Props = {
  title: string;
  items: any[];
  Component: any;
  EditComponent?: any;
  auth: boolean;
};

const AboutSection = (props: Props) => {
  const { title, items, Component } = props;

  if (!items && !props.auth) return null;

  return (
    <Wrapper>
      <h1>
        {title}
        {props.auth && (
          <>
            <span>{props.EditComponent}</span>
          </>
        )}
      </h1>

      <hr />
      {items
        ? items.map((item: any, key: any) => (
            <Component key={key} item={item} />
          ))
        : ""}
    </Wrapper>
  );
};

export default AboutSection;
