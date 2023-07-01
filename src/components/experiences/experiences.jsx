import "./experiences.css";
import React from 'react';
import { AiOutlineBehance } from "react-icons/ai";
import {Container , Row, Col} from 'react-bootstrap';


const Experiences = () => {
  return (
    <div id="experiences" className="container members-container">
      <h1 className="member-txt"> Professional Experience</h1>
      <Container className="member member-1">
        <Row style={{"width" : "100%"}}>
          <Col lg={{ span: 3, offset: 0 }} md={{ span: 2, offset: 0 }} sm={{ span: 3, offset: 0 }} xs={{ span: 3, offset: 0 }}>
            <div className="member-img1"></div>
          </Col>
          <Col lg={{ span: 7, offset: 1 }} md={{ span: 8, offset: 0 }} sm={{ span: 9, offset: 0 }} xs={{ span: 9, offset: 0 }} id="hide-for-lg">
            <div className="member-info2">
              <h1 className="name2">Cavigrum</h1>
              <h3 className="position">Astronomy Club</h3>
            </div>  
          </Col>
          <Col lg={{ span: 7, offset: 1 }}  md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
            <div className="member-info2">
              <Row style={{}}>
                <Col lg={{ span: 12, offset: 0 }}  md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                  <div id="show-for-lg">
                    <h1 className="name">Cavigrum</h1>
                    <h3 className="position">Astronomy Club</h3>
                  </div>
                  <h4 className="about">
                    I led the propaganda team and also was the project manager for this event.
                    I was responsible for all the event design including (logo, flyers, flags, cards, shirts) and the photography during the event and the video editing for the recap video by the end of the trip day.
                  </h4>
                </Col>
              </Row>
              <Row style={{"margin-top": "40px", "margin-bottom": "20px", "width" : "100%"}}>
                <Col lg={{ span: 4, offset: 1 }} md={{ span: 4, offset: 1 }} sm={{ span: 4, offset: 1 }} xs={{ span: 4, offset: 1 }}>
                  <a href="https://www.behance.net/gallery/143255583/Cavigrum" className="contact-member">
                    <span>Behance</span>
                  </a>
                </Col>
                <Col lg={{ span: 4, offset: 3 }} md={{ span: 4, offset: 3 }} sm={{ span: 4, offset: 3 }} xs={{ span: 4, offset: 3 }}>
                  <a href="https://www.facebook.com/astronomyauc/" className="contact-member2">
                    <span>Website</span>
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="member member-2">
        <Row style={{"width" : "100%"}}>
          <Col lg={{ span: 3, offset: 0 }} md={{ span: 2, offset: 0 }} sm={{ span: 3, offset: 0 }} xs={{ span: 3, offset: 0 }}>
            <div className="member-img2"></div>
          </Col>
          <Col lg={{ span: 7, offset: 1 }} md={{ span: 8, offset: 0 }} sm={{ span: 9, offset: 0 }} xs={{ span: 9, offset: 0 }} id="hide-for-lg">
            <div className="member-info2">
              <h1 className="name">Plebits Logo</h1>
              <h3 className="position">Plebits</h3>
            </div>  
          </Col>
          <Col lg={{ span: 7, offset: 1 }}  md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
            <div className="member-info2">
              <Row style={{}}>
                <Col lg={{ span: 12, offset: 0 }}  md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                  <div id="show-for-lg">
                    <h1 className="name">Plebits Logo</h1>
                    <h3 className="position">Plebits</h3>
                  </div>
                  <h4 className="about">
                  Plebits is an online tech startup that creates digital projects for businesses. I was responsible for designing their logo in a modern way with the tech magic touch.
                  autem eius!
            </h4>
                </Col>
              </Row>
              <Row style={{"margin-top": "40px", "margin-bottom": "20px", "width" : "100%"}}>
                <Col lg={{ span: 4, offset: 1 }} md={{ span: 4, offset: 1 }} sm={{ span: 4, offset: 1 }} xs={{ span: 4, offset: 1 }}>
                  <a href="https://www.behance.net/gallery/145228171/Plebits-Logo" className="contact-member">
                    <span>Behance</span>
                  </a>
                </Col>
                <Col lg={{ span: 4, offset: 3 }} md={{ span: 4, offset: 3 }} sm={{ span: 4, offset: 3 }} xs={{ span: 4, offset: 3 }}>
                  <a href="https://plebits.com/" className="contact-member2">
                    <span>Website</span>
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="member member-3">
        <Row style={{"width" : "100%"}}>
          <Col lg={{ span: 3, offset: 0 }} md={{ span: 2, offset: 0 }} sm={{ span: 3, offset: 0 }} xs={{ span: 3, offset: 0 }}>
            <div className="member-img3"></div>
          </Col>
          <Col lg={{ span: 7, offset: 1 }} md={{ span: 8, offset: 0 }} sm={{ span: 9, offset: 0 }} xs={{ span: 9, offset: 0 }} id="hide-for-lg">
            <div className="member-info2">
              <h1 className="name">Turbosmurfs Media</h1>
              <h3 className="position">turbosmurfs.gg</h3>
            </div>  
          </Col>
          <Col lg={{ span: 7, offset: 1 }}  md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
            <div className="member-info2">
              <Row style={{}}>
                <Col lg={{ span: 12, offset: 0 }}  md={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }}>
                  <div id="show-for-lg">
                    <h1 className="name">Turbosmurfs Media</h1>
                    <h3 className="position">turbosmurfs.gg</h3>
                  </div>
                  <h4 className="about">
                  Plebits is an online tech startup that creates digital projects for businesses. I was responsible for designing their logo in a modern way with the tech magic touch.
                  autem eius!
            </h4>
                </Col>
              </Row>
              <Row style={{"margin-top": "40px", "margin-bottom": "20px", "width" : "100%"}}>
                <Col lg={{ span: 4, offset: 1 }} md={{ span: 4, offset: 1 }} sm={{ span: 4, offset: 1 }} xs={{ span: 4, offset: 1 }}>
                  <a href="https://www.behance.net/gallery/145260459/Turbosmurfs" className="contact-member">
                    <span>Behance</span>
                  </a>
                </Col>
                <Col lg={{ span: 4, offset: 3 }} md={{ span: 4, offset: 3 }} sm={{ span: 4, offset: 3 }} xs={{ span: 4, offset: 3 }}>
                  <a href="https://turbosmurfs.gg/" className="contact-member2">
                    <span>Website</span>
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experiences;
