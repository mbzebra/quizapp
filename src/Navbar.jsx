import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import config from './config.json';  // Make sure the path to config.json is correct

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState('');
  const subjects = Object.keys(config.lessons); // Dynamically load subjects from config

  const toggleDropdown = (subject) => {
    setActiveDropdown(activeDropdown === subject ? '' : subject);
  };

  return (
    <Navbar bg="light" expand="lg" className="m-0 p-0">
      <Navbar.Brand as={NavLink} to="/">QuizApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
          {subjects.map((subject) => (
            <NavDropdown
              key={subject}
              title={subject}
              id={`${subject.toLowerCase()}-nav-dropdown`}
              show={activeDropdown === subject}
              onMouseEnter={() => toggleDropdown(subject)}
              onMouseLeave={() => toggleDropdown('')}
            >
              {[...Array(config.lessons[subject])].map((_, index) => (
                <NavDropdown.Item key={index} as={NavLink} to={`/${subject.toLowerCase()}/${index + 1}`}>
                  Lesson {index + 1}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
