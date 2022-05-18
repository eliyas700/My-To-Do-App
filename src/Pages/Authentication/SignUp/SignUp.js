import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, upadeProfileError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  let errorMsg;
  if (error) {
    errorMsg = <p className="text-danger">{error.message}</p>;
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!error) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      toast.success("Creating Account");
    }
  };
  return (
    <div
      style={{ width: "420px" }}
      className="mx-auto border border-2 px-2 py-4 rounded rounded-2"
    >
      <h4 className="text-center text-secondary my-3">Create An Account </h4>

      <Form onSubmit={handleFormSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </Col>
        </Form.Group>
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
        <Button type="submit" className=" mx-auto d-block">
          SignUp{" "}
        </Button>
      </Form>
      <p className="py-3">
        <small>
          Already Have An Account ? <Link to="/login">Log In </Link>{" "}
        </small>
      </p>
      <p>{errorMsg}</p>
      <div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
