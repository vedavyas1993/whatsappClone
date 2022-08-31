import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

import { v4 as uuidv4 } from "uuid";
function Login({ onIdSubmit }) {
  const idRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };

  const createNewId = () => {
    onIdSubmit(uuidv4());
  };
  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit" className="me-2 mt-2">
          Login
        </Button>
        <Button onClick={createNewId} variant="secondary" className="mt-2">
          Create a new Id.
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
