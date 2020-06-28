import React, { useState } from "react";
import Modal from "../components/Modal";
import { Button, Form } from "react-bootstrap";
import { CV } from "../types";
import { IDictionary } from "../types";

type Props = {
  cv: CV;
  updateCv: any;
  pending?: boolean;
};

const EditHome = (props: Props) => {
  const [show, setShow] = useState(false);
  const { cv } = props;
  const home = cv.pages.home;

  const [title, setTitle] = useState(home.title);
  const [body, setBody] = useState(home.body);

  const formMap = {
    body: setBody,
    title: setTitle,
  } as IDictionary;

  const handleChange = (event: any) => {
    const target = event.currentTarget;

    if (formMap[target.name]) {
      formMap[target.name](target.value);
    }
  };

  const submit = () => {
    cv.pages.home.title = title;
    cv.pages.home.body = body;

    props.updateCv(cv);
    setShow(false);
  };

  return (
    <>
      <Button onClick={() => setShow(true)}>Edit</Button>
      <Modal
        title="Edit Home Page"
        show={show}
        hide={() => setShow(false)}
        submit={submit}
        pending={props.pending}
      >
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            name="title"
            value={title}
            onChange={handleChange}
            as="input"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            name="body"
            value={body}
            onChange={handleChange}
            as="textarea"
            rows={3}
          />
        </Form.Group>
      </Modal>
    </>
  );
};

export default EditHome;
