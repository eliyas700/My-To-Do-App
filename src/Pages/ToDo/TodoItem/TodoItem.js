import React from "react";
import { Button, Card } from "react-bootstrap";
const TodoItem = ({ toDo }) => {
  const { name, description } = toDo;
  return (
    <div className="col-12 col-lg-4">
      <Card>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 120)}</Card.Text>
          <div className="d-flex justify-content-around">
            <Button variant="primary">Completed</Button>
            <Button variant="danger">Delete</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TodoItem;
