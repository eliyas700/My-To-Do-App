import { useState, useEffect } from "react";

const useTodo = () => {
  const [toDos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://pacific-lake-06904.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [toDos]);
  return [toDos, setTodos];
};

export default useTodo;
