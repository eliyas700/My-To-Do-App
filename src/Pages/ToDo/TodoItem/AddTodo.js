import React from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.name.value;
    const description = event.target.description.value;
    const body = {
      name: title,
      description: description,
      isCompleted: "false",
    };
    const url = `https://pacific-lake-06904.herokuapp.com/tasks`;
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
          navigate("/");
        }
      });
    event.target.reset();
  };

  return (
    <div>
      <h4 className="text-center text-primary my-4">Add Your Next Task</h4>
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
