import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return(
  <div className='footerWrapper'>
      <div className="container">
        <div className="footerContent">
          <div className="about">
              <div className="descTitle">About</div>
              <Link to="/"><div className="descText">Who we are</div></Link>
              <Link to="/"><div className="descText">What we do</div></Link>
              <Link to="/"><div className="descText"><AiOutlinePhone /> Tell</div></Link>
              <a href="mailto:victoriakuzia@gmail.com"><div className="descText">
                <AiOutlineMail /> Reach out via mail</div></a>
          </div>
          <div className="buy">
              <div className="descTitle">Buy</div>
              <Link to="/products"><div className="descText">Store</div></Link>
              <Link to="/"><div className="descText">Privacy Policy</div></Link>
              <Link to="/contact-us"><div className="descText">Stories</div></Link>
              <Link to="/about"><div className="descText"> Stories</div></Link>
              <Link to="/contact-us"><div className="descText">get help</div></Link>

          </div>
          <div className="others">
              <div className="descTitle">Others</div>
              <Link to="/contact-us"><div className="descText">FAQs</div></Link>
              <Link to="/contact-us"><div className="descText">Report Error</div></Link>
              <Link to="/#lang"><div className="descText">language</div></Link>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Footer;
