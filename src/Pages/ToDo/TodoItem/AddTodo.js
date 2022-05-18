import React from "react";
import { Button, Form } from "react-bootstrap";
import useTodo from "../../../Hooks/useTodo";

const AddTodo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.name.value;
    const description = event.target.description.value;
    const body = {
      name: title,
      description: description,
      isCompleted: "false",
    };
    const url = `http://localhost:5000/tasks`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    event.target.reset();
    // const title = event.target.name.value;
    // const description = event.target.description.value;
    // const obj = { name: title, description: description, isCompleted: false };
  };

  return (
    <div>
      <h2>Add Your Next Task</h2>
      <Form
        onSubmit={handleSubmit}
        style={{ width: "380px" }}
        className=" border border-1 p-3  mx-auto"
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="name" placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Task Detail</Form.Label>
          <Form.Control
            placeholder="Description"
            name="description"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button type="submit"> Add Now</Button>
      </Form>
    </div>
  );
};

export default AddTodo;
