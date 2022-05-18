import React from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
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
      .then((result) => {
        console.log(result.acknowledged);
        if (result.acknowledged) {
          toast.success("Successfully Added");
        }
      });
    event.target.reset();
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
          <Form.Control type="text" name="name" required placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Task Detail</Form.Label>
          <Form.Control
            placeholder="Description"
            required
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
