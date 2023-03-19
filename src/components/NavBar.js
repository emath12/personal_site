import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';


function OurBar(props) {

    // TODO : fix the left aign, dunno why its not working

    return (
        <>
            <Navbar>
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>About Me</Nav.Link>
                <Nav.Link>Resume</Nav.Link>
                <Nav.Link>Relevant Coursework</Nav.Link>
                <Nav.Link>Portfolio</Nav.Link>
                <Nav.Link>Contact Me</Nav.Link>
            </Navbar>
            <br></br>
        </>
      );
}

export default OurBar;