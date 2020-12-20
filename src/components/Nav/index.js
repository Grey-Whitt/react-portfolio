import React, {useEffect} from 'react';
import { Navbar, Nav } from 'react-bootstrap/'


function Navbr({currentPage, setPage}) {
    
    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

    return (
        <header className="flex-row px-1 mb-3">
            <Navbar collapseOnSelect expand="lg" variant="dark" className='mb-3'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ml-auto' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ml-auto'>
                        <Nav.Link onClick={() => setPage('About Me')} className='navLinks'>About Me</Nav.Link>
                        <Nav.Link onClick={() => setPage('Contact')} className='navLinks'>Contact</Nav.Link>
                        <Nav.Link onClick={() => setPage('Projects')} className='navLinks'>Projects</Nav.Link>
                        <Nav.Link href='https://github.com/Grey-Whitt' rel="noopener noreferrer" target='_blank' className='navLinks'>Github</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
            <h2 className='align'>
                <a className='size1'  rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/grey-whittenberger/">Grey Whittenberger</a>
                <p className='size2'>Full-stack web developer</p>
            </h2>
            
        </header>
    );
}

export default Navbr;