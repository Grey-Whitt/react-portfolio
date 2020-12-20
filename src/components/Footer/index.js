import React from 'react';
import { Container } from 'react-bootstrap';
import { Github, Linkedin, Stackoverflow } from '@icons-pack/react-simple-icons';

function Footer() {

    return (

        <footer>
            <Container className='footerContainer'>
                <div className='footerBox'>
                <a className='px-2' rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/grey-whittenberger/"><Linkedin color="#00a6fb" size={40} /></a>
                <a className='px-2' rel="noopener noreferrer" target='_blank' href="https://stackexchange.com/users/19078884/greyw"><Stackoverflow color="#00a6fb" size={40} /></a>
                <a className='px-2' rel="noopener noreferrer" target='_blank' href="https://github.com/Grey-Whitt/"><Github color="#00a6fb" size={40} /></a>
                </div>
            </Container>
        </footer>

    )
}

export default Footer;