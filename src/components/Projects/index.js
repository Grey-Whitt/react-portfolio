import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap';

function Portfolio() {
    const [Projects] = useState([
        {
            name: 'Budget Tracker',
            tech: 'Full-stack PWA',
            source: 'tech-blog.png'
        },
        {
            name: 'Note Taker',
            tech: 'db project',
            source: 'note-taker.png'
        },
        {
            name: 'Tech Blog',
            tech: 'Full-stack db',
            source: 'tech-blog.png'
        }, {
            name: 'Budget Tracker',
            tech: 'Full-stack PWA',
            source: 'tech-blog.png'
        },
        {
            name: 'Note Taker',
            tech: 'db project',
            source: 'note-taker.png'
        },
        {
            name: 'Budget Tracker3',
            tech: 'Full-stack PWA',
            source: 'tech-blog.png'
        },
        {
            name: 'Budget Tracker',
            tech: 'Full-stack PWA',
            source: 'tech-blog.png'
        },
        {
            name: 'Note Taker',
            tech: 'db project',
            source: 'note-taker.png'
        }
    ])

    return (

        <Row className='justify-content-center'>
            {Projects.map((project) => (
                <Col xs={6} md={4} className='mb-3'>
                    <div className='imgContainer'>
                        
                        <img
                            src={require(`../../assets/projects/${project.source}`)}
                            alt={project.name}
                            className="imgThumbnail"
                            key={project.name}
                        />
                    </div> 

                </Col>
            ))}
        </Row>

    );

}

export default Portfolio