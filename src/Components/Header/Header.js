import { Container, Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="container">
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand as={Link} to="/" className="nav__link text-dark" id="logo">
          <h2>
            {" "}
            <span className="text-dark" id="icon__C">B</span> A R B E R' S
              </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} className="nav nav__link text-dark" to="/">HOME</Nav.Link>
            <Nav.Link as={Link} className="nav nav__link text-dark" to="/dashboard">DASHBOARD</Nav.Link>
            <Nav.Link as={Link} className="nav nav__link text-dark" to="/prices">PRICES</Nav.Link>
            <Nav.Link as={Link} className="nav nav__link text-dark" to="/stylists">STYLISTS</Nav.Link>
            <Nav.Link as={Link} className="nav nav__link text-dark" to="/review">REVIEW</Nav.Link>
            <Nav.Link as={Link} className="nav nav__link text-dark" to="/admin">ADMIN</Nav.Link>
            <Nav.Link as={Link} className="nav nav__link text-dark" to="/contact">CONTACT</Nav.Link>
            {
              loggedInUser.email ?
                <Nav.Link as={Link} className="nav" to="/profile">{loggedInUser.name}</Nav.Link>
                :
                <Link className="btn__primary text-white" id="loginBtn" to="/login">
                LOGIN
              </Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

  )
};

export default Header;
