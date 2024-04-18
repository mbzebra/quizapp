import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleDropdown = (subject) => {
    setActiveDropdown(activeDropdown === subject ? '' : subject);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">QuizApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
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
            <NavDropdown.Item as={NavLink} to="/history/lesson1">Lesson 1</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history/lesson2">Lesson 2</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history/lesson3">Lesson 3</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history/lesson4">Lesson 4</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history/lesson5">Lesson 5</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history/lesson6">Lesson 6</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history/lesson7">Lesson 7</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history/lesson8">Lesson 8</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history/lesson9">Lesson 9</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history/lesson10">Lesson 10</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/history/lesson11">Lesson 11</NavDropdown.Item>
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
            <NavDropdown.Item as={NavLink} to="/biology/lesson1">Lesson 1</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/biology/lesson2">Lesson 2</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/biology/lesson3">Lesson 3</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/biology/lesson4">Lesson 4</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/biology/lesson5">Lesson 5</NavDropdown.Item>
            {/* ... more biology lessons */}
          </NavDropdown>

          {/* ... other nav links ... */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
