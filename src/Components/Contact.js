import React from 'react';
import './ContactAbout.css'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const Contact = (props) => {
  return (
  <div className='contact-page'>
      <div className="container">
        <div className='contactGrid'>
          <div>
            <div className="descTitle">Get in contact with us</div>
            <div className="descText">
              <p>Cell:<a href="tel:+1-438-992-2004">+1-438-992-2004</a></p>
              <p>Cell:<a href="tel:+1-514-238-1059">+1-514-238-1059</a></p>
              <p>Email:<a href='mailto:docteurebee@gmail.com'>docteurebee@gmail.com</a></p>
              <p>You can locate us at: <span className='locate'>
                <p>157, Montee Renaud</p>  
                <p>st-Eushache, QC J7R 4K3 Canada</p>  
              </span></p>
            </div>
          </div>
          <div>
            <div className="descTitle">Write to us directly from here</div>
            <div className="sendMessage">
              <form>
                <input className='formItem' type="text" placeholder='Enter email...' />
                <textarea className='formItem' name="message" id="msg" cols="30" rows="5" placeholder='write your message here...'></textarea>
                <div className="callToAction honeyItemLink redBackground">Send</div>
              </form>
            </div>
          </div>
          <div>
            <div className="descTitle">Our social network</div>
            <div className="contactSocialLinks">
                <div className="linkItemWrapper">
                  <a href='https://facebook.com/docteurebee'>
                    <div className="socialLink">
                        <FaFacebookF /> 
                    </div>
                  </a>
                  <span className='socialLinkText'>Facebook</span>
                </div>
                <div className="linkItemWrapper">
                <a href='https://instagram.com/docteurebee'>
                  <div className="socialLink">
                    <FaInstagram />
                  </div>
                  </a>
                  <span className='socialLinkText'>Instagram</span>
                </div>
                <div className="linkItemWrapper">
                <a href='https://linkedin.com/docteurebee'>
                  <div className="socialLink">
                    <FaLinkedinIn />
                  </div>
                </a>
                  <span className='socialLinkText'>LinkedIn</span>
                </div>
                <div className="linkItemWrapper">
                <a href='https://youtube.com/titans'>
                  <div className="socialLink">
                    <FaYoutube />
                  </div>
                </a>
                <span className='socialLinkText'>Youtube</span>
                </div>
                <div className="linkItemWrapper">
                <a href='https://twitter.com/docteurebee'>
                  <div className="socialLink">
                    <FaTwitter />
                  </div>
                </a>
                <span className='socialLinkText'>Twitter</span>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
  )
};

export default Contact;
