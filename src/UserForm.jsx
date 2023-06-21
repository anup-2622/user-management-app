import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const UserForm = ({ onSubmit, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: data, // Set default values for form fields
  });
  const submitForm = (data) => {
    onSubmit(data);
  };
  return (
    <div>
      {/* {console.log(userData)} */}
      <Form onSubmit={handleSubmit(submitForm)}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" {...register("name", { required: true })} />
          {errors.name && (
            <span style={{ color: "red", fontSize: "14px" }}>
              Name is required
            </span>
          )}
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "14px" }}>
              Email is required and should be in a valid format
            </span>
          )}
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" {...register("phone", { required: true })} />
          {errors.phone && (
            <span style={{ color: "red", fontSize: "14px" }}>
              Phone number is required
            </span>
          )}
        </Form.Group>

        <Button type="submit" className="mt-2  ">
          Add User
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
