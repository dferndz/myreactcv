import React, { useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "../components/Modal";
import styled from "styled-components";
import { Button, Form, Badge } from "react-bootstrap";
import { CV } from "../types";
import { IDictionary } from "../types";

const BadgeWrapper = styled.span`
  font-size: 20px;

  svg: hover {
    cursor: pointer;
  }
`;

type Props = {
  cv: CV;
  updateCv: any;
  pending?: boolean;
};

const EditSkills = (props: Props) => {
  const [show, setShow] = useState(false);
  const { cv } = props;

  const [skills, setSkills] = useState(cv.skills);
  const skillRef = useRef<any>();

  const addSkill = () => {
    const newSkills = skills ? [...skills] : [];
    newSkills.push(skillRef.current.value);
    setSkills(newSkills);
    skillRef.current.value = "";
  };

  const removeSkill = (skill: any) => {
    let newSkills = skills ? [...skills] : [];
    newSkills = newSkills.filter((value) => value !== skill);
    setSkills(newSkills);
  };

  const submit = () => {
    cv.skills = skills;
    props.updateCv(cv);
    setShow(false);
  };

  return (
    <>
      <Button className="ml-4" onClick={() => setShow(true)}>
        Edit
      </Button>
      <Modal
        title="Edit Skills"
        show={show}
        hide={() => {
          setSkills(cv.skills);
          setShow(false);
        }}
        submit={submit}
        pending={props.pending}
      >
        {skills &&
          skills.map((skill: string, key: any) => (
            <BadgeWrapper key={key}>
              <Badge onClick={() => removeSkill(skill)} variant="primary">
                {skill} <IoMdClose />
              </Badge>{" "}
            </BadgeWrapper>
          ))}

        <Form.Group className="mt-4">
          <Form.Label>New skill:</Form.Label>
          <Form.Control
            placeholder="C++, Python, ..."
            name="body"
            as="input"
            ref={skillRef}
          />
        </Form.Group>
        <Button onClick={addSkill}>Add</Button>
      </Modal>
    </>
  );
};

export default EditSkills;
