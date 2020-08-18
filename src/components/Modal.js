import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import Media from 'react-bootstrap/Media'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import me from '../assets/me.JPG'
import resume from '../assets/Dorian-Meade.pdf'


function Body() { 
    const [key, setKey] = useState('about');

    return (
        <Container className="centerBox">
            <Row className="purpBorder mt-3 mx-2 p-2">
                <Col className="text-center men showbox scale"> 
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-code-slash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                    </svg>
                    &nbsp;Hello, World! I am a developer.
                </Col>
            </Row>
            <Row className="men purpBorder mt-2 mx-2 p-2">
                <Col xs={4}>
                    <Media className="border-light">
                    <img
                        width={140}
                        height={140}
                        className="mt-2 medi"
                        src={me}
                        alt="img"
                    />
                    </Media>
                </Col>
                <Col xs={8}>
                    <Table className="mt-3 mb-0 men">
                    <tbody>
                        <tr>
                        <td> Name </td>
                        <td> Dorian Meade </td>
                        </tr>
                        <tr>
                        <td> Age </td>
                        <td> 21 </td>
                        </tr>
                        <tr>
                        <td> Location </td>
                        <td> Gainesville, FL </td>
                        </tr>
                    </tbody>
                    </Table>
                </Col>
            </Row>
            <Tabs
                id="controlled-tab-example"
                transition={false}
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mx-2 mt-2"
            >
                <Tab className="men box purpBorder mx-2 pl-2 " eventKey="about" title="About">
                    <Row><Col> >Dorian.origin</Col></Row>
                    <Row className="mb-3"><Col><span>&nbsp;&nbsp;</span>=> Davie, FL</Col> </Row>
        
                    <Row><Col> >Dorian.education</Col> </Row>
                    <Row className="mb-3"><Col><span>&nbsp;&nbsp;</span>=> Univerity of Florida</Col> </Row>
        
                    <Row><Col> >Dorian.major</Col> </Row>
                    <Row className="mb-3"><Col><span>&nbsp;&nbsp;</span>=> Computer Science</Col> </Row>
        
                    <Row><Col> >Dorian.minor</Col> </Row>
                    <Row className="mb-3"><Col><span>&nbsp;&nbsp;</span>=> Mathematics </Col> </Row>
        
                    <Row><Col> >Dorian.graduation</Col> </Row>
                    <Row className="mb-3"><Col><span>&nbsp;&nbsp;</span>=> 2020 </Col> </Row>
        
                    <Row><Col> >Dorian.interests</Col> </Row>
                    <Row className="mb-3"><Col><span>&nbsp;&nbsp;</span>=> ["coding", "coffee", "cats", "machine_learning", <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>"music_festivals", "nature"] </Col> </Row>
                </Tab>
                
                <Tab className="men box purpBorder mx-2 pl-2" eventKey="resume" title="Resume">
                    <Row><Col> >Dorian.resume</Col> </Row>
                    <Row className="mb-3"><Col><span>&nbsp;&nbsp;</span>=> <a href={resume}>resume.pdf</a></Col></Row>
                </Tab>
  
                <Tab className="men box purpBorder mx-2 pl-2" eventKey="contact" title="Contact">
                    <Row><Col> >Dorian.github</Col></Row>
                    <Row className="mb-3"><Col><span>&nbsp;&nbsp;</span>=> <a href="https://github.com/dorianmeade">github.com/dorianmeade</a></Col></Row>
        
                    <Row><Col> >Dorian.linkedin</Col> </Row>
                    <Row className="mb-3"><Col><span>&nbsp;&nbsp;</span>=> <a href="https://www.linkedin.com/in/dorianmeade">linkedin.com/in/dorianmeade</a></Col></Row>
        
                    <Row><Col> >Dorian.facebook</Col> </Row>
                    <Row className="mb-3"><Col><span>&nbsp;&nbsp;</span>=> <a href="https://www.facebook.com/dorianmeade">facebook.com/dorianmeade</a></Col></Row>
        
                    <Row><Col> >Dorian.email</Col> </Row>
                    <Row className="mb-3"><Col><span>&nbsp;&nbsp;</span>=> <a href="mailto:dorianmeade1@gmail.com">dorianmeade1@gmail.com</a></Col></Row>
        
                </Tab>
            </Tabs>
        </Container>
    );
}

export default Body;