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

const EditAboutMe = (props: Props) => {
  const [show, setShow] = useState(false);
  const { cv } = props;
  const about = cv.pages.about;

  const [title, setTitle] = useState(about.title);
  const [body, setBody] = useState(about.body);

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
    cv.pages.about.title = title;
    cv.pages.about.body = body;

    props.updateCv(cv);
    setShow(false);
  };

  return (
    <>
      <Button className="ml-4" onClick={() => setShow(true)}>
        Edit
      </Button>
      <Modal
        title="Edit About Me"
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

export default EditAboutMe;
