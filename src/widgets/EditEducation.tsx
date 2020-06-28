import React, { useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "../components/Modal";
import styled from "styled-components";
import { Button, Form, Card } from "react-bootstrap";
import { CV, School } from "../types";
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

const EditExperience = (props: Props) => {
  const [show, setShow] = useState(false);
  const { cv } = props;

  const [schools, setSchools] = useState(cv.schools);

  const nameRef = useRef<any>();
  const degreRef = useRef<any>();
  const majorRef = useRef<any>();
  const detailsRef = useRef<any>();

  const addSchool = () => {
    const newSchools = schools ? [...schools] : [];
    newSchools.push({
      name: nameRef.current.value,
      degree: degreRef.current.value,
      major: majorRef.current.value,
      details: detailsRef.current.value,
    });
    setSchools(newSchools);
    nameRef.current.value = "";
    degreRef.current.value = "";
    majorRef.current.value = "";
    detailsRef.current.value = "";
  };

  const removeSchool = (school: any) => {
    let newSchools = schools ? [...schools] : [];
    newSchools = newSchools.filter((value) => value !== school);
    setSchools(newSchools);
  };

  const submit = () => {
    cv.schools = schools;
    props.updateCv(cv);
    setShow(false);
  };

  return (
    <>
      <Button className="ml-4" onClick={() => setShow(true)}>
        Edit
      </Button>
      <Modal
        title="Edit Education"
        show={show}
        hide={() => {
          setSchools(cv.schools);
          setShow(false);
        }}
        submit={submit}
        pending={props.pending}
      >
        {schools &&
          schools.map((school: School, key: any) => (
            <Card className="mb-2">
              <Card.Header>
                {`${school.name} - ${school.degree} - ${school.major}`}
                {" | "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => removeSchool(school)}
                >
                  Delete
                </Button>
              </Card.Header>
            </Card>
          ))}

        <h5 className="mt-4">Add new school</h5>
        <hr></hr>

        <Form.Group className="mt-4">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            placeholder="School name ..."
            as="input"
            ref={nameRef}
          />
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Degree:</Form.Label>
          <Form.Control
            placeholder="Bachelor's, Mater's ..."
            as="input"
            ref={degreRef}
          />
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Major:</Form.Label>
          <Form.Control
            placeholder="Your major ..."
            as="input"
            ref={majorRef}
          />
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            placeholder="Description ..."
            as="textarea"
            ref={detailsRef}
            rows={3}
          />
        </Form.Group>

        <Button onClick={addSchool}>Add</Button>
      </Modal>
    </>
  );
};

export default EditExperience;
