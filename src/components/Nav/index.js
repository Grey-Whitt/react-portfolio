import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


function Nav() {

    return (
        <header className="flex-row px-1">
            <h2 className='align'>
                <a className='size1' rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/grey-whittenberger/">Grey Whittenberger</a>
                <p className='size2'>Full-stack web developer</p>
            </h2>
            <div className='navLinks'>
                <ul>
                    <li><a className='size4' href="#news">About</a></li>
                    <li><a className='size4' href="#contact">Contact</a></li>
                    <li><a className='size4' href="#contact">Projects</a></li>
                    <li><a className='size4' href="https://github.com/Grey-Whitt" rel="noreferrer" target='_blank'>Github</a></li>
                    
                </ul>
            </div>    
           
        </header>
    );
}

export default Nav;