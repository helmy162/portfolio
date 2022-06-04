import "./button.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';  
import {Container , Row, Col} from 'react-bootstrap';

function Buttons() {
  return (
    <Container className="container button-container">
      <Row style={{"width" : "100%"}}>
        <Col md={{ span: 2, offset: 2 }}>
          <a href="#qualifications" className="btn pri">
           Web Development
          </a>
        </Col>
        <Col md={{ span: 2, offset: 1 }}>
          <a href="#contact" className="btn sec">
            Get in Touch
          </a>
        </Col>
        <Col md={{ span: 2, offset: 1 }}>
          <a href="#qualifications2" className="btn pri">
            Graphic Design
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Buttons;
