import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css'

function Footer() {
    return (
      <div className='footer'>
        <Container>
          <Row className='socialMedia'>
            <Col>
              <a href='#'><FaFacebook /></a>
              <a href='#'><FaTwitter /></a>
              <a href='#'><FaLinkedin /></a>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>&copy;2023 kream.com</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  export default Footer;
