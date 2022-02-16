import React, {useState} from 'react';
import './ContactAbout.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const sendMail = (form) =>{
      emailjs.sendForm('service_h5wzc2p', 'docteure_bee', form, 'user_32oPl5e2EBX4S9r5xcHo9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  }

  const clearForm = () =>{
    setEmail('');
    setText('');
  }
  const checkAndValidate = (e) =>{
    e.preventDefault();
    let form = e.target
    sendMail(form);
    clearForm(form);
  }

  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const { t } = useTranslation();
  return (
  <div className='contact-page'>
      <div className="container">
        <div className='contactGrid'>
          <div>
            <div className="descTitle">{ t("contactpage.grid_one.title") }</div>
            <div className="descText">
              <p>{ t("contactpage.grid_one.cell") }:<a href="tel:+1-438-992-2004">+1-438-992-2004</a></p>
              <p>{ t("contactpage.grid_one.cell") }:<a href="tel:+1-514-238-1059">+1-514-238-1059</a></p>
              <p>Email:<a href='mailto:docteurebee@gmail.com'>docteurebee@gmail.com</a></p>
              <p>{ t("contactpage.grid_one.locate_us") }: <span className='locate'>
                <span>157, Montee Renaud</span>  
                <span>St-Eustache, QC J7R 4K3 Québec Canada</span>  
              </span></p>
            </div>
          </div>
          <div>
            <div className="descTitle">{ t("contactpage.grid_two.title") }</div>
            <div className="sendMessage">
              <form onSubmit={checkAndValidate}>
                <input className='formItem' id='email' type="email"  placeholder={ t("contactpage.grid_two.enter_email") } onChange={e=>{setEmail(e.target.value)}} value={email} />
                <textarea className='formItem' id='text' name="message" id="msg" cols="30" rows="5" placeholder={ t("contactpage.grid_two.message") } onChange={e=>{setText(e.target.value)}} value={text} ></textarea>
                <button type='submit' className="callToAction honeyItemLink redBackground">{ t("contactpage.grid_two.send") }</button>
              </form>
            </div>
          </div>
          <div>
            <div className="descTitle">{ t("contactpage.grid_three.title") }</div>
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
