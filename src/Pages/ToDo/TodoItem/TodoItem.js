import React from "react";
import { Button, Card } from "react-bootstrap";
import useTodo from "../../../Hooks/useTodo";
const TodoItem = ({ toDo }) => {
  const [toDos, setTodos] = useTodo([]);
  const { _id, name, description } = toDo;
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:5000/tasks/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = toDos.filter((item) => item._id !== id);
          setTodos(remaining);
        });
    }
  };

  return (
    <div className="col-12 col-lg-4">
      <Card>
        <Card.Header>{name}</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 120)}</Card.Text>
          <div className="d-flex justify-content-around">
            <Button variant="primary">Completed</Button>
            <Button onClick={() => handleDelete(_id)} variant="danger">
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TodoItem;
