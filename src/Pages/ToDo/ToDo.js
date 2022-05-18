import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useTodo from "../../Hooks/useTodo";

import TodoItem from "./TodoItem/TodoItem";

const ToDo = () => {
  const [toDos, setTodos] = useTodo([]);

  return (
    <div className="container-fluid">
      <div className="row">
        {toDos.map((toDo, index) => (
          <TodoItem key={index} toDo={toDo}></TodoItem>
        ))}
      </div>
      <div className="mx-auto text-center my-4">
        <Button as={Link} to="/addTask" variant="primary">
          Add New Task
        </Button>
      </div>
    </div>
  );
};

export default ToDo;
