import React, { useState, useRef } from "react";
import firebase from "firebase";
import Modal from "../components/Modal";
import styled from "styled-components";
import { Button, Form, Card, ProgressBar } from "react-bootstrap";
import { CV, Project } from "../types";
import { IDictionary } from "../types";
import useStorage from "../hooks/useStorage";

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

const EditProjects = (props: Props) => {
  const [show, setShow] = useState(false);
  const { cv } = props;
  const { data, upload, pending, progress } = useStorage();

  const [projects, setProjects] = useState(cv.projects);

  const nameRef = useRef<any>();
  const urlRef = useRef<any>();
  const imgRef = useRef<any>();
  const detailsRef = useRef<any>();

  const uploadRef = useRef<any>();

  const addProject = () => {
    const newProjects = projects ? [...projects] : [];
    newProjects.push({
      name: nameRef.current.value,
      url: urlRef.current.value,
      img: imgRef.current.value,
      details: detailsRef.current.value,
    });
    setProjects(newProjects);
    nameRef.current.value = "";
    urlRef.current.value = "";
    imgRef.current.value = "";
    detailsRef.current.value = "";
  };

  const removeProject = (project: Project) => {
    let newProjects = projects ? [...projects] : [];
    newProjects = newProjects.filter((value) => value !== project);
    setProjects(newProjects);
  };

  const uploadImg = () => {
    const file = uploadRef.current.files[0];

    const reader = new FileReader();

    upload(file);
  };

  const submit = () => {
    cv.projects = projects;
    props.updateCv(cv);
    setShow(false);
  };

  return (
    <>
      <Button className="ml-4" onClick={() => setShow(true)}>
        Edit
      </Button>
      <Modal
        title="Edit Projects"
        show={show}
        hide={() => {
          setProjects(cv.projects);
          setShow(false);
        }}
        submit={submit}
        pending={props.pending}
      >
        {projects &&
          projects.map((project: Project, key: any) => (
            <Card className="mb-2">
              <Card.Header>
                {`${project.name}`}
                {" | "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => removeProject(project)}
                >
                  Delete
                </Button>
              </Card.Header>
            </Card>
          ))}

        <h5 className="mt-4">Add new project</h5>
        <hr></hr>

        <Form.Group className="mt-4">
          <Form.Label>Project name:</Form.Label>
          <Form.Control
            placeholder="Project name ..."
            as="input"
            ref={nameRef}
          />
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Project url:</Form.Label>
          <Form.Control
            placeholder="Url of your project ..."
            as="input"
            ref={urlRef}
          />
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Select an image</Form.Label>
          <Form.Control ref={imgRef} as="select">
            <option key="null" value="">
              No image
            </option>
            {data.map((img: any, key: any) => (
              <option key={key} value={img.link}>
                {img.name}
              </option>
            ))}
          </Form.Control>
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

        <Button onClick={addProject}>Add</Button>

        <Form.Group>
          <Form.File ref={uploadRef} label="Upload a new image" />
          {progress != 100 && <ProgressBar now={progress} />}
        </Form.Group>
        <Button onClick={uploadImg}>Upload</Button>
      </Modal>
    </>
  );
};

export default EditProjects;
