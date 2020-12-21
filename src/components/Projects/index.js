import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

function Portfolio() {
    //projects that will be mapped over to be displayed on page
    const [Projects] = useState([
        {
            name: 'Tech Blog',
            source: 'tech-blog.png',
            link: 'https://github.com/Grey-Whitt/tech-blog'
        },
        {
            name: 'Note Taker',
            source: 'note-taker.png',
            link: 'https://github.com/Grey-Whitt/note-taker'
        },
        {
            name: 'Budget Tracker',
            source: 'budget-tracker.png',
            link: 'https://github.com/Grey-Whitt/budget-tracker'
        }, {
            name: 'Team Profile Generator',
            source: 'team.png',
            link: 'https://github.com/Grey-Whitt/team-profile-generator'
        },
        {
            name: 'Clinic Pal',
            source: 'clinic-pal.jpg',
            link: 'https://clinic-pal.herokuapp.com/'
        },
        {
            name: 'Space Dash',
            source: 'space-dash.jpg',
            link: 'https://github.com/Team-Incredibles/Group-Project'
        },
        {
            name: 'Weather Dashboard',
            source: 'weather.png',
            link: 'https://github.com/Grey-Whitt/weather-dashboard'
        },
        {
            name: 'Portfolio Generator',
            source: 'portfolio-gen.png',
            link: 'https://github.com/Grey-Whitt/portfolio-generator'
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
                                <div className='description'>{project.name}</div>
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