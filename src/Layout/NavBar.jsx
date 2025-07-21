// src/layout/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const MyNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const handleNavClick = () => setDropdownOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !e.target.closest(".hover-darken")
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <Navbar expand='lg' style={navbarStyle}>
        <Container fluid style={navbarFlex}>
          {/* Logo / Brand */}
          <Nav.Link
            as={NavLink}
            to='/'
            style={logoText}
            className='hover-darken'
          >
            <p style={{ marginBottom: 0, fontWeight: "bold" }}>
              Kevin Barany Portfolio
            </p>
          </Nav.Link>

          {/* Right side */}
          <div style={rightSide}>
            <div
              style={rightSide}
              onClick={toggleDropdown}
              className='hover-darken'
            >
              <GiHamburgerMenu />
            </div>
          </div>
        </Container>
      </Navbar>

      {/* Dropdown menu */}
      <div
        ref={dropdownRef}
        className={`dropdown-container ${dropdownOpen ? "show" : ""}`}
        style={dropdown}
      >
        <Nav.Link
          as={NavLink}
          to='/'
          style={dropdownItem}
          onClick={handleNavClick}
          className='hover-darken'
        >
          Home
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to='/projects'
          style={dropdownItem}
          onClick={handleNavClick}
          className='hover-darken'
        >
          Projects
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to='/about'
          style={dropdownItem}
          onClick={handleNavClick}
          className='hover-darken'
        >
          About
        </Nav.Link>
        <Nav.Link
          as={NavLink}
          to='/contact'
          style={dropdownItem}
          onClick={handleNavClick}
          className='hover-darken'
        >
          Contact
        </Nav.Link>
      </div>
    </>
  );
};

export default MyNavbar;

const navbarStyle = {
  backgroundColor: "white",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.9)",
  padding: "10px 20px",
  paddingTop: "15px",
  zIndex: 9999,
  width: "100vw",
  position: "fixed",
  top: 0,
  left: 0,
};

const navbarFlex = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const rightSide = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
};

const logoText = {
  color: "#000",
  textDecoration: "none",
};

const dropdown = {
  position: "absolute",
  top: "80px",
  right: "5px",
  backgroundColor: "white",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  borderRadius: "8px",
  padding: "10px",
  minWidth: "150px",
  maxWidth: "200px",
  textAlign: "center",

  zIndex: 10000,
};

const dropdownItem = {
  color: "black",
  padding: "8px 12px",
  textDecoration: "none",
  display: "block",
};
