import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem/TodoItem";

const ToDo = () => {
  const [toDos, setTodos] = useState([]);
  useEffect(() => {
    fetch("TodoList.json")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  return (
    <div className="row">
      {toDos.map((toDo) => (
        <TodoItem toDo={toDo}></TodoItem>
      ))}
    </div>
  );
};

export default ToDo;
