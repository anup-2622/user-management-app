import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./App.css";
import UserForm from "./UserForm";
import { useState } from "react";
// import { set } from "react-hook-form";
import UserList from "./UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  const addUser = (data) => {
    const newUser = { id: Date.now(), ...data };
    setUsers([...users, newUser]);
    setShowModal(false);
  };

  const editUser = (userId, data) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, ...data };
      }
      return user;
    });
    setUsers(updatedUsers);
    setEditUserId(null);
    setShowModal(false);
  };

  const deleteUser = (userId) => {
    // setPopup(true);
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const openModal = (userId = null) => {
    setEditUserId(userId);
    setShowModal(true);
  };

  const closeModal = () => {
    setEditUserId(null);
    setShowModal(false);
  };

  return (
    <div>
      <Container>
        <Row className="mt-3">
          <Col>
            <Button variant="primary" onClick={() => openModal()}>
              Add User
            </Button>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <UserList users={users} onEdit={openModal} onDelete={deleteUser} />
          </Col>
        </Row>

        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{editUserId ? "Edit User" : "Add User"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserForm
              onSubmit={
                editUserId ? (data) => editUser(editUserId, data) : addUser
              }
            />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default App;
