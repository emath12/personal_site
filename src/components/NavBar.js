import './NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect, useRef } from 'react';

function OurBar() {

    return (
        <>
            <Navbar className='navbar-style-1'>   
                <Nav className='ml-auto'>        
                    <Nav.Link className="bold-on-hover" href="#home">Home</Nav.Link>
                    <Nav.Link href="#about-me">About Me</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#relevant-coursework">Relevant Coursework</Nav.Link>
                    <Nav.Link href="#contact-me">Contact Me</Nav.Link>
                </Nav>    
            </Navbar>
        </>
      );
}

export default OurBar;