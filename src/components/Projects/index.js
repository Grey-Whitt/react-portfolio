import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

function Portfolio() {
    //projects that will be mapped over to be displayed on page
    const [Projects] = useState([
        {
            name: 'Budget Tracker',
            tech: 'Full-stack PWA',
            source: 'tech-blog.png',
            description: 'Tech blog is a lorem ipsum delor sit amet',
            link: 'https://www.google.com/'
        },
        {
            name: 'Note Taker',
            tech: 'db project',
            source: 'note-taker.png',
            description: 'note taker is a lorem ipsum delor sit amet',
            link: 'https://www.google.com/'
        },
        {
            name: 'Tech Blog',
            tech: 'Full-stack db',
            source: 'tech-blog.png',
            description: 'Tech blog is a lorem ipsum delor sit amet',
            link: 'https://www.google.com/'
        }, {
            name: 'Budget Tracker',
            tech: 'Full-stack PWA',
            source: 'tech-blog.png',
            description: 'Tech blog is a lorem ipsum delor sit amet',
            link: 'https://www.google.com/'
        },
        {
            name: 'Note Taker',
            tech: 'db project',
            source: 'note-taker.png',
            description: 'note taker is a lorem ipsum delor sit amet',
            link: 'https://www.google.com/'
        },
        {
            name: 'Budget Tracker3',
            tech: 'Full-stack PWA',
            source: 'tech-blog.png',
            description: 'Tech blog is a lorem ipsum delor sit amet',
            link: 'https://www.google.com/'
        },
        {
            name: 'Budget Tracker',
            tech: 'Full-stack PWA',
            source: 'tech-blog.png',
            description: 'Tech blog is a lorem ipsum delor sit amet',
            link: 'https://www.google.com/'
        },
        {
            name: 'Note Taker',
            tech: 'db project',
            source: 'note-taker.png',
            description: 'note taker is a lorem ipsum delor sit amet',
            link: 'https://www.google.com/'
        }
    ])

    return (
        <>
        <div  className='mb-3 underline'><h1>My Projects</h1></div>
        <Row className='justify-content-center'>
            {Projects.map((project, i) => (
                <Col lg={12} xl={4} className='mb-3' key={i}>
                    <a  href={project.link} rel="noopener noreferrer" target='_blank'>
                        <div className='imgContainer'>
                            <img
                                src={require(`../../assets/projects/${project.source}`)}
                                alt={project.name}
                                className="imgThumbnail"
                            />
                            <div className='overlay'>
                                <div className='description'>{project.description}</div>
                            </div>
                        </div>
                    </a>

                </Col>
            ))}
        </Row>
        <div className='centered'>
            <a className='gitBtn' href='https://github.com/Grey-Whitt' rel="noopener noreferrer" target='_blank'>
            
                See more on my Github
                
            </a>
        </div>
        </>

    );

}

export default Portfolio