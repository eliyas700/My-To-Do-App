import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My To-Do
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/addTask">
                Add Task
              </Nav.Link>
              {user ? (
                <Nav.Link onClick={() => signOut(auth)}>
                  <small>{user?.displayName}</small> Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Log In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
