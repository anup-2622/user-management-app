import React from "react";
import { Card, Button } from "react-bootstrap";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      {users.map((user) => (
        <div>
          <Card className="mt-2" key={user.id}>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>Email: {user.email}</Card.Text>
              <Card.Text>Phone: {user.phone}</Card.Text>
              <Button variant="primary" onClick={() => onEdit(user.id)}>
                Edit
              </Button>{" "}
              <Button variant="danger" onClick={() => onDelete(user.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default UserList;
