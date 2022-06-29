import "./button.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';  
import {Container , Row, Col} from 'react-bootstrap';

function Buttons() {
  return (
    <Container className="container button-container">
      <Row style={{"width" : "100%", "text-align" : "center" }}>
        <Col lg={{ span: 3, offset: 1 }} md={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 3 }} className="mt-2 mb-2">
          <a href="#qualifications" className="btn pri">
           Web Development
          </a>
        </Col>
        <Col lg={{ span: 3, offset: 1 }} md={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 3 }} className="mt-2 mb-2">
          <a href="#contact" className="btn sec">
            Get in Touch
          </a>
        </Col>
        <Col lg={{ span: 3, offset: 1 }} md={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }} xs={{ span: 8, offset: 3 }} className="mt-2 mb-2">
          <a href="#qualifications2" className="btn pri">
            Graphic Design
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Buttons;
