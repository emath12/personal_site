import './NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom'

function OurBar() {

    const nav = useNavigate();

    function handleNotesClick() {
        nav("/notes")
    }

    function onSPAClick() {
        nav("/")
    }

    return (
        <>
            <Navbar fixed='top' className='navbar-style-1'>   
                <Nav className='ml-auto'>        
                    <Nav.Link className="bold-on-hover" href="#home">Home</Nav.Link>
                    <Nav.Link onClick={onSPAClick} href="#about-me">About Me</Nav.Link>
                    <Nav.Link onClick={onSPAClick} href="#resume">Resume</Nav.Link>
                    <Nav.Link onClick={onSPAClick} href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link onClick={onSPAClick} href="#relevant-coursework">Relevant Coursework</Nav.Link>
                    <Nav.Link onClick={handleNotesClick}>Notes</Nav.Link>
                    <Nav.Link onClick={onSPAClick} href="#contact-me">Contact Me</Nav.Link>
                </Nav>    


            </Navbar>
        </>
      );
}

export default OurBar;