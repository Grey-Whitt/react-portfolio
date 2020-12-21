import React from 'react';
import { Container } from 'react-bootstrap';
import { GoMarkGithub } from "react-icons/go";
import { DiStackoverflow } from "react-icons/di"
import { GrLinkedin } from "react-icons/gr"


function Footer() {

    return (

        <footer>
            <Container className='footerContainer'>
                <div className='footerBox'>
                <a className='px-2' rel="noopener noreferrer" target='_blank' href="https://github.com/Grey-Whitt/"><GoMarkGithub className='svgLink' color="#00a6fb" size={40} /></a>
                <a className='px-2' rel="noopener noreferrer" target='_blank' href="https://stackexchange.com/users/19078884/greyw"><DiStackoverflow className='svgLink' color="#00a6fb" size={40} /></a>
                <a className='px-2' rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/grey-whittenberger/"><GrLinkedin className='svgLink' color="#00a6fb" size={40} /></a>
                </div>
            </Container>
        </footer>

    )
}

export default Footer;