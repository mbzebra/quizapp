import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleDropdown = (subject) => {
    setActiveDropdown(activeDropdown === subject ? '' : subject);
  };

  return (
    <Navbar bg="light" expand="lg" className="m-0 p-0">
      <Navbar.Brand href="/">QuizApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

         <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
            {/* Other nav links and dropdowns */}
          </Nav>
        <Nav className="mr-auto">
          {/* Other nav links */}
          {/* History Dropdown */}
          <NavDropdown
            title="History"
            id="history-nav-dropdown"
            show={activeDropdown === 'History'}
            onMouseEnter={() => toggleDropdown('History')}
            onMouseLeave={() => toggleDropdown('')}
          >
            <NavDropdown.Item as={NavLink} to="/history-lesson/1">Lesson 1</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history-lesson/2">Lesson 2</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history-lesson/3">Lesson 3</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history-lesson/4">Lesson 4</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history-lesson/5">Lesson 5</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history-lesson/6">Lesson 6</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history-lesson/7">Lesson 7</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history-lesson/8">Lesson 8</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history-lesson/9">Lesson 9</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history-lesson/10">Lesson 10</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history-lesson/11">Lesson 11</NavDropdown.Item>
            {/* ... more history lessons */}
          </NavDropdown>

          {/* Biology Dropdown */}
          <NavDropdown
            title="Biology"
            id="biology-nav-dropdown"
            show={activeDropdown === 'Biology'}
            onMouseEnter={() => toggleDropdown('Biology')}
            onMouseLeave={() => toggleDropdown('')}
          >
            <NavDropdown.Item as={NavLink} to="/biology-lesson/1">Lesson 1</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/biology-lesson/2">Lesson 2</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/biology-lesson/3">Lesson 3</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/biology-lesson/4">Lesson 4</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/biology-lesson/5">Lesson 5</NavDropdown.Item>
            {/* ... more biology lessons */}
          </NavDropdown>
          {/* ... other nav links ... */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
