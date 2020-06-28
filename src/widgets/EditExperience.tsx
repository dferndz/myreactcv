import React, { useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "../components/Modal";
import styled from "styled-components";
import { Button, Form, Card } from "react-bootstrap";
import { CV, Job } from "../types";
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

  const [jobs, setJobs] = useState(cv.jobs);

  const employerRef = useRef<any>();
  const positionRef = useRef<any>();
  const departmentRef = useRef<any>();
  const detailsRef = useRef<any>();

  const addJob = () => {
    const newJobs = jobs ? [...jobs] : [];
    newJobs.push({
      employer: employerRef.current.value,
      position: positionRef.current.value,
      department: departmentRef.current.value,
      details: detailsRef.current.value,
    });
    setJobs(newJobs);
    employerRef.current.value = "";
    positionRef.current.value = "";
    departmentRef.current.value = "";
    detailsRef.current.value = "";
  };

  const removeJob = (job: any) => {
    let newJobs = jobs ? [...jobs] : [];
    newJobs = newJobs.filter((value) => value !== job);
    setJobs(newJobs);
  };

  const submit = () => {
    cv.jobs = jobs;
    props.updateCv(cv);
    setShow(false);
  };

  return (
    <>
      <Button className="ml-4" onClick={() => setShow(true)}>
        Edit
      </Button>
      <Modal
        title="Edit Experience"
        show={show}
        hide={() => {
          setJobs(cv.jobs);
          setShow(false);
        }}
        submit={submit}
        pending={props.pending}
      >
        {jobs &&
          jobs.map((job: Job, key: any) => (
            <Card className="mb-2">
              <Card.Header>
                {`${job.employer} - ${job.department} - ${job.position}`}
                {" | "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => removeJob(job)}
                >
                  Delete
                </Button>
              </Card.Header>
            </Card>
          ))}

        <h5 className="mt-4">Add new employment</h5>
        <hr></hr>

        <Form.Group className="mt-4">
          <Form.Label>Employer:</Form.Label>
          <Form.Control
            placeholder="Employer ..."
            as="input"
            ref={employerRef}
          />
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Department:</Form.Label>
          <Form.Control
            placeholder="Department ..."
            as="input"
            ref={departmentRef}
          />
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Position:</Form.Label>
          <Form.Control
            placeholder="Position ..."
            as="input"
            ref={positionRef}
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

        <Button onClick={addJob}>Add</Button>
      </Modal>
    </>
  );
};

export default EditExperience;
