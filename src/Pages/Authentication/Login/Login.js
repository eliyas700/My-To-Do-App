import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div
      style={{ width: "420px" }}
      className="mx-auto border border-2 px-2 py-4 rounded rounded-2"
    >
      <h5 className="text-center text-secondary my-2">Log In Now</h5>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" name="email" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2" className="">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              name="password"
              required
              placeholder="Password"
            />
          </Col>
        </Form.Group>
        <Button className=" mx-auto d-block">LogIn </Button>
      </Form>
      <p className="my-2">
        <small>
          {" "}
          New At To-Do App ? <Link to="/signup">Create An Account</Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
