import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css'

function Footer() {
    return (
      <div className='footer'>
       
          
            <div>
              <a href='#'><FaFacebook /></a>
              <a href='#'><FaTwitter /></a>
              <a href='#'><FaLinkedin /></a>
              </div>
        
              <p>&copy;2023 kream.com</p>
         
      </div>
    );
  }
  export default Footer;
