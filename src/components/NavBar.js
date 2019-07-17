import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style/NavBar.css';
const github = require('../assets/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png');
const linkedin = require('../assets/LinkedIn-Logos/LI-In-Bug.png');

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          JacobBN
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="https://github.com/JacobBN" target="_blank">
            <img alt="GitHub" src={github}/>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/jacobbn" target="_blank">
            <img alt="LinkedIn" src={linkedin}/>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
  
export default NavBar;