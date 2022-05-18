import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  let errorMsg;
  if (loading) {
    <Loading></Loading>;
  }
  if (error) {
    errorMsg = <p className="text-danger">{error.message}</p>;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!error) {
      signInWithEmailAndPassword(email, password);
      toast.success("Logged In Successfully");
    }
  };
  return (
    <div
      style={{ width: "420px" }}
      className="mx-auto border border-2 px-2 py-4 rounded rounded-2"
    >
      <h5 className="text-center text-secondary my-2">Log In Now</h5>
      <Form onSubmit={handleSubmit}>
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
          LogIn{" "}
        </Button>
      </Form>
      <p>{errorMsg}</p>
      <p className="my-2">
        <small>
          {" "}
          New At To-Do App ? <Link to="/signup">Create An Account</Link>
        </small>
      </p>
      <div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
