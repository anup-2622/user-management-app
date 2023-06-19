import React from "react";
import { Form, Button } from "react-bootstrap";

const UserForm = () => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
          {/* {name && <span>Name is required</span>} */}
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
          {/* {errors.email && (
            <span>Email is required and should be in a valid format</span>
          )} */}
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" />
          {/* {errors.phone && <span>Phone number is required</span>} */}
        </Form.Group>

        <Button type="submit">Add User</Button>
      </Form>
    </div>
  );
};

export default UserForm;
