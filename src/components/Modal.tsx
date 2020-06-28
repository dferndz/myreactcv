import React from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";

type Props = {
  title?: string;
  show: boolean;
  hide: () => void;
  submit: () => void;
  children?: any;
  pending?: boolean;
};

const BasicModal = (props: Props) => {
  return (
    <Modal size="lg" show={props.show} onHide={props.hide}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title || "Edit data"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{props.children}</Modal.Body>

      <Modal.Footer>
        <Button onClick={props.hide} variant="secondary">
          Close
        </Button>
        <Button onClick={props.submit} variant="primary">
          {props.pending ? (
            <Spinner size="sm" animation="grow" />
          ) : (
            "Save changes"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BasicModal;
