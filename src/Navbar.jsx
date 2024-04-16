import React, { useState,useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState('');
  const historyRef = useRef(null);
  const biologyRef = useRef(null);

  const toggleDropdown = (subject) => {
    setActiveDropdown(activeDropdown === subject ? '' : subject);
  };

  const closeDropdowns = () => {
    setActiveDropdown('');
  };

  const handleClickOutside = (event) => {
    if (!historyRef.current.contains(event.target) && !biologyRef.current.contains(event.target)) {
      closeDropdowns();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav style={styles.navBar}>
      {/* ... other nav links ... */}

      {/* History Dropdown */}
      <div style={styles.dropdown} ref={historyRef}>
        <button style={styles.dropbtn} onClick={() => toggleDropdown('History')}>
          History
        </button>
        {activeDropdown === 'History' && (
          <div style={styles.dropdownContent}>
            <NavLink style={styles.dropdownItem} to="/history/lesson1" onClick={closeDropdowns}>Lesson 1</NavLink>
            <NavLink style={styles.dropdownItem} to="/history/lesson2" onClick={closeDropdowns}>Lesson 2</NavLink>
            <NavLink style={styles.dropdownItem} to="/history/lesson3" onClick={closeDropdowns}>Lesson 3</NavLink>
            <NavLink style={styles.dropdownItem} to="/history/lesson4" onClick={closeDropdowns}>Lesson 4</NavLink>
            <NavLink style={styles.dropdownItem} to="/history/lesson5" onClick={closeDropdowns}>Lesson 5</NavLink>
            <NavLink style={styles.dropdownItem} to="/history/lesson6" onClick={closeDropdowns}>Lesson 6</NavLink>
            <NavLink style={styles.dropdownItem} to="/history/lesson7" onClick={closeDropdowns}>Lesson 7</NavLink>
            <NavLink style={styles.dropdownItem} to="/history/lesson8" onClick={closeDropdowns}>Lesson 8</NavLink>
            <NavLink style={styles.dropdownItem} to="/history/lesson9" onClick={closeDropdowns}>Lesson 9</NavLink>
            {/* ... more history lessons */}
          </div>
        )}
      </div>

      {/* Biology Dropdown */}
      <div style={styles.dropdown} ref={biologyRef}>
        <button style={styles.dropbtn} onClick={() => toggleDropdown('Biology')}>
          Biology
        </button>
        {activeDropdown === 'Biology' && (
          <div style={styles.dropdownContent}>
            <NavLink style={styles.dropdownItem} to="/biology/lesson1" onClick={closeDropdowns}>Lesson 1</NavLink>
            {/* ... more biology lessons */}
          </div>
        )}
      </div>

      {/* ... other nav links ... */}
    </nav>
  );
};

// Styles for the components
const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    background: '#333',
  },
  navItem: {
    textDecoration: 'none',
    color: 'white',
    padding: '0 1rem',
    fontSize: '1.2rem',
  },
  dropdown: {
    position: 'relative',
    display: 'inline-block',
  },
  dropbtn: {
    background: '#333',
    color: 'white',
    padding: '10px',
    fontSize: '1.2rem',
    border: 'none',
    cursor: 'pointer',
  },
  dropdownContent: {
    display: 'block',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  },
  dropdownItem: {
    color: 'black',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'left',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: '#ddd',
    },
  },
};

export default NavBar;
