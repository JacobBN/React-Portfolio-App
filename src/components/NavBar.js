import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHackerrank, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faRegistered } from '@fortawesome/free-regular-svg-icons';
import './style/NavBar.css';

function NavBar() {
  return (
    <>
      <Navbar variant="dark">
        <Navbar.Brand>
          JacobBN
        </Navbar.Brand>
        <Nav className="mr-auto align-items-center">
          <Link to="/home">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="https://www.hackerrank.com/jacob_b_norgaard" target="_blank">
            <FontAwesomeIcon icon={faHackerrank} color="white" className="social-icon"/>
          </Nav.Link>
          <Nav.Link href="https://github.com/JacobBN" target="_blank">
            <FontAwesomeIcon icon={faGithub} color="white" className="social-icon"/>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/jacobbn" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} color="white" className="social-icon"/>
            <FontAwesomeIcon icon={faRegistered} color="white" className="registered"/>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
  
export default NavBar;