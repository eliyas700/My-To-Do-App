import React from "react";
import { Button, Card } from "react-bootstrap";
import toast from "react-hot-toast";
import useTodo from "../../../Hooks/useTodo";
const TodoItem = ({ toDo }) => {
  const [toDos, setTodos] = useTodo([]);
  const { _id, name, description, isCompleted } = toDo;
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm(`Are You Sure,Want to Delete ${name}?`);
    if (proceed) {
      const url = `https://pacific-lake-06904.herokuapp.com/tasks/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = toDos.filter((item) => item._id !== id);
          setTodos(remaining);
          toast.success(`You Have Deleted ${name} Task`);
        });
    }
  };

  const handleCompleted = (id) => {
    //Send Data to the Server Site
    fetch(`https://pacific-lake-06904.herokuapp.com/tasks?id=${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success(
            "Congratulations You Have Successfully Completed the Task '👏'"
          );
        }
      });
  };

  return (
    <div className="col-12 col-lg-4">
      <Card>
        <Card.Header
          className={`${
            isCompleted === "true" && "text-decoration-line-through text-danger"
          } `}
        >
          {name}
        </Card.Header>
        <Card.Body>
          <Card.Title
            className={`${
              isCompleted === "true" &&
              "text-decoration-line-through text-danger"
            } `}
          >
            {name}
          </Card.Title>
          <Card.Text
            className={`${
              isCompleted === "true" && "text-decoration-line-through"
            } `}
          >
            {description.slice(0, 120)}
          </Card.Text>
          <div className="d-flex justify-content-around">
            <Button
              onClick={() => handleCompleted(_id)}
              disabled={isCompleted === "true"}
              variant="primary"
            >
              Completed
            </Button>
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
