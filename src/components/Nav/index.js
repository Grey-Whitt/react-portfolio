import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap/'


function Navbr() {

    return (
        <header className="flex-row px-1 mb-3">
            <Navbar collapseOnSelect expand="lg" variant="dark" className='mb-3'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ml-auto' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ml-auto'>
                        <Nav.Link href="#deets" className='navLinks'>About</Nav.Link>
                        <Nav.Link href="#memes" className='navLinks'>Contact</Nav.Link>
                        <Nav.Link href="#deets" className='navLinks'>Projects</Nav.Link>
                        <Nav.Link href="#memes" className='navLinks'>Github</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
            <h2 className='align'>
                <a className='size1' rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/grey-whittenberger/">Grey Whittenberger</a>
                <p className='size2'>Full-stack web developer</p>
            </h2>
            
        </header>
    );
}

export default Navbr;