import React from "react";
import logo from "../img/logo.png";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="navBar">
      <Navbar bg="dark">
        <Navbar.Brand>
          <img src={logo} className="logo" alt="" />
        </Navbar.Brand>
        <nav>
          <NavDropdown title="Camareros">
            <NavDropdown.Item>Camarero 1</NavDropdown.Item>
            <NavDropdown.Item>Camarero 2</NavDropdown.Item>
            <NavDropdown.Item>Camarero 3</NavDropdown.Item>
          </NavDropdown>
        </nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
