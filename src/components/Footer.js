import "./FooterStyles.css";
import React from 'react';
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} 
                    style = {{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                      <p>Home Address</p>
                      <p>Home City</p>
                    </div>
                </div>

                <h4>
                  <div className="phone">
                      <FaPhone size={20} 
                      style = {{color:"#fff", marginRight:"2rem"}}/>
                      <div>
                        <p>0789-123-456</p>
                      </div>
                  </div>
                </h4>

                <h4>
                  <div className="email">
                      <FaMailBulk size={20} 
                      style = {{color:"#fff", marginRight:"2rem"}}/>
                      <div>
                        <p>info@email.com</p>
                      </div>
                  </div>
                </h4>

            </div>
            <div className="right">
              <h4>About company</h4>
              <p>Lorem ipsum dolor sit amet,</p>
              <p>consectetur adipiscing elit,</p>  
              <p>sed do eiusmod tempor incididunt</p>
              <p>ut labore et dolore magna aliqua</p>
              <div className="social">
                    <FaFacebook size={30} 
                      style = {{color:"#fff", marginRight:"1rem"}}/>
                    <FaTwitter size={30} 
                      style = {{color:"#fff", marginRight:"1rem"}}/>
                    <FaLinkedin size={30} 
                      style = {{color:"#fff", marginRight:"1rem"}}/>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Footer