import React, {useContext} from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import resume from '../assets/Meade.pdf'

import ColorSwitch from './ColorSwitch'
import {ThemeContext} from '../context/colorScheme'

const AboutMe = () => {
    const {state} = useContext(ThemeContext)
    
    let theme;
    if (state.theme === 'dark') {
        theme = "darkTerminal"
    }
    else {
        theme = 'lightTerminal'
    }
    
    return (
        <div style={{minHeight:'100vh'}}>
            <ColorSwitch/>
            <div className={theme}>
                <Container>
                    <Row style={{background: 'gray', marginLeft: -15, marginRight: -15, paddingTop: 5, height: 20}}>&nbsp;
                        <div style={{background:'tomato', borderRadius: 100, width: 12, height: 12}}></div> 
                        &nbsp;
                        <div style={{background:'gold', borderRadius: 100, width: 12, height: 12}}></div>
                        &nbsp;
                        <div style={{background:'limegreen', borderRadius: 100, width: 12, height: 12}}></div>
                    </Row>
                    <Row><Col> >Dorian.education</Col> </Row>
                    <Row className="mb-3 switch"><Col><span>&nbsp;&nbsp;</span>=> Univerity of Florida</Col> </Row>

                    <Row><Col> >Dorian.major</Col> </Row>
                    <Row className="mb-3 switch"><Col><span>&nbsp;&nbsp;</span>=> Computer and Information Science</Col> </Row>

                    <Row><Col> >Dorian.minor</Col> </Row>
                    <Row className="mb-3 switch"><Col><span>&nbsp;&nbsp;</span>=> Mathematics </Col> </Row>

                    <Row><Col> >Dorian.graduation</Col> </Row>
                    <Row className="mb-3 switch"><Col><span>&nbsp;&nbsp;</span>=> December 2020 </Col> </Row>

                    <Row><Col> >Dorian.resume</Col> </Row>
                    <Row className="mb-3"><Col><span>&nbsp;&nbsp;</span>=> <a href={resume} target="_blank" rel="noopener noreferrer" >dorianmeade.pdf</a></Col></Row>
                    
                    <Row><Col> >Dorian.interests</Col> </Row>
                    <Row className="mb-3 switch"><Col><span>&nbsp;&nbsp;</span>=> ["web_development", "machine_learning", "coffee", <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>"python", "reading", "music_festivals", "cats", &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"hammocking"] </Col> </Row>
                </Container>
            </div>
            <button className='showbox scale' onClick={() => document.getElementById('projects').scrollIntoView({behavior: 'smooth'})} style={{border: 'none', background: 'transparent', marginTop:200, marginLeft: 620}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
        </div>
    )
}
export default AboutMe;