import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import Media from 'react-bootstrap/Media'

import me from '../assets/me.JPG'

const FullScreen = () => {
    return (
        <div style={{minHeight:'100vh'}}>
            <Container className="outlined">
                <Row className="purpBorder mt-3 mx-2 p-2">
                    <Col className="text-center showbox scale"> 
                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-code-slash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                        </svg>
                        &nbsp;Hello, World! I'm a software developer.
                    </Col>
                </Row>
                <Row className="men purpBorder mt-2 mx-2 p-2">
                    <Col xs={4}>
                        <Media className="border-light">
                        <img
                            width={140}
                            height={140}
                            className="mt-2 circular"
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
                            <td className="switch"> Dorian Meade </td>
                            </tr>
                            <tr>
                            <td> Location </td>
                            <td className="switch"> Ft Lauderdale, FL </td>
                            </tr>
                            <tr>
                            <td> Company </td>
                            <td className="switch"><a style={{color:'black'}} href='https://grubbrr.com/' target='_blank' rel="noopener noreferrer">Grubbrr</a> </td>
                            </tr>
                        </tbody>
                        </Table>
                    </Col>
                </Row>
                <br></br>
                <Row style={{marginLeft: 250}}>
                <button className='showbox scale' onClick={() => document.getElementById('down').scrollIntoView({behavior: 'smooth'})} style={{border: 'none', background: 'transparent'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
                </Row>
            </Container>
        </div>
    )
}

export default FullScreen;