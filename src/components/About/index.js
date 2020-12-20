import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function About() {

    return (
        <>
            <div className='mb-3 underline'><h1>About Me</h1></div>
            <Row >
                <Col lg={4}><Image className='' src='/images/me.png' thumbnail/></Col>
                <Col lg={8}> 
                    <p className='bio'>
                    I am an enthusiastic and highly motivated Web Developer who is ready to apply my knowledge, creativity, positive attitude, and deep passion for learning to a position within the industry. I’m regarded as a dedicated team member, with a thorough understanding of the full stack. I am also highly organized, with a keen eye for detail and the proven ability to manage multiple tasks simultaneously. I have a certificate in full-stack development from UT of Austin.    
                    I leverage my strong communication skills to quickly establish rapport and build trusting relationships with members at all levels of an organization. I’m also recognized as an out-of-the-box, analytical thinker who introduces scalable solutions to complex problems, enabling business growth, and increased customer satisfaction. I thrive in fast-paced environments that champion diversity and collaboration, while also embracing the entrepreneurial spirit. Many personal and team projects have prepared me to bring value to any team.
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default About;