import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { GoBrowser } from "react-icons/go";
import { BsTerminal } from 'react-icons/bs'

function Resume() {

    const [frontEndSkills] = useState(['HTML', 'CSS', 'JavaScript', 'JQuery', 'React', 'Bootstrap', 'Handlebars'])

    const [backEndSkills] = useState(['APIs', 'Node', 'Express', 'MySQL, Sequelize', 'MongoDB, Mongoose', 'PWAs', 'OOP', 'MVC paradigm'])

    return (
        <Container>
            <Row className='justify-content-center skillContainer'>
                <Col className='skills' lg={6}>

                    <BsTerminal color="#00a6fb" size={60} />
                    <div className='size4'>Back-end proficiencies</div>
                    <ul className='mt-4'>
                        {backEndSkills.map((skill, i) => (
                            <li key={skill + i}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </Col>

                <Col className='skills' lg={6}>
                    <GoBrowser color="#00a6fb" size={60} />
                    <div className='size4'>Front-end proficiencies</div>
                    <ul className='mt-4'>
                        {frontEndSkills.map((skill, i) => (
                            <li key={skill + i}>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <p className='mt-5'>Download my full resume <a rel="noopener noreferrer" target='_blank' href={require(`../../assets/images/example-resume.png`)} download>here</a>. (Resume is a WIP and not attached yet.)</p>
        </Container>
    )
}

export default Resume