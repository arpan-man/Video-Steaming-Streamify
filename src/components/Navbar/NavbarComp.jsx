// NavbarComp.js

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/Logo.png";
import UserProfileModal from "../UserProfile/UserProfileModal";
import "./NavbarComp.css";

function NavbarComp({ userDetails }) {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleCloseProfileModal = () => setShowProfileModal(false);
  const handleShowProfileModal = () => setShowProfileModal(true);

  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" className="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="NavLink me-auto"></Nav>
          </Navbar.Collapse>
          <Nav className="me-auto">
            {userDetails.picture && (
              <img
                src={userDetails.picture}
                alt={`${userDetails.given_name}'s profile`}
                className="RightCornerImage"
                onClick={handleShowProfileModal}
              />
            )}
          </Nav>
        </Container>
      </Navbar>

      <UserProfileModal
        userDetails={userDetails}
        show={showProfileModal}
        handleClose={handleCloseProfileModal}
      />
    </>
  );
}

export default NavbarComp;
