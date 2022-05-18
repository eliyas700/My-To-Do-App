import { useState, useEffect } from "react";

const useTodo = () => {
  const [toDos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [toDos]);
  return [toDos, setTodos];
};

export default useTodo;
