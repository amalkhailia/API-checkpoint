import React from "react";

import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Users">Users</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
