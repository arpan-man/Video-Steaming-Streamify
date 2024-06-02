// UserProfileModal.jsx

import React from "react";
import Modal from "react-bootstrap/Modal";
import UserProfile from "./UserProfile";

function UserProfileModal({ userDetails, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UserProfile userDetails={userDetails} />
      </Modal.Body>
    </Modal>
  );
}

export default UserProfileModal;
