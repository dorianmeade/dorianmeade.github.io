import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import Media from 'react-bootstrap/Media'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import me from '../assets/beach.jpg';
import { useState } from 'react';


function HelloWorld(props)
{
    const [key, setKey] = useState('about');
    
    return (
        <Container className="centerBox">
      <Row className="border rounded border-secondary mt-3 mx-2 p-2">
        <Col className="text-center"> DORIAN MEADE
        </Col>
      </Row>
       
      <Row className="border rounded border-secondary mt-2 mx-2 p-2">
        <Col>
          <Media>
            <img
              width={128}
              height={128}
              className="mt-4 ml-3"
              src={me}
              alt="img"
            />
          </Media>
        </Col>
        <Col>
          <Table>
            <tbody>
              <tr>
                <td> Age </td>
                <td> 21 </td>
              </tr>
              <tr>
                <td> Location </td>
                <td> Gainesville, FL </td>
              </tr>
              <tr>
                <td> Occupation </td>
                <td> Student </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
       
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mx-2 mt-2"
        >
         <Tab className="border border-top-0 mx-2 termFont" eventKey="about" title="About">
            <HelloWorld/>
         </Tab>
         <Tab eventKey="home" title="Home"></Tab>
        </Tabs>
    </Container>
    );
}

export default HelloWorld;