import React, { useState } from 'react';
import googleLogo from './googleLogo.png'
import { GoogleLogin } from 'react-google-login';
import { FiArrowLeft, FiCheck } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { VscEye } from 'react-icons/vsc';

import './Register.css'

const Register = () => {
    const exitRegister = (e)=>{
        e.target.parentElement.parentElement.style.display = "none"
    }
    const responseGoogle = (res)=>{
        console.log(res);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target.firstElementChild;
        const name = form;
        const email = form.nextElementSibling;
        const password = email.nextElementSibling;
        
        
        
        const handleName=(params)=>{
            params.classList.add('alert');
            setTimeout(()=>{
                params.classList.remove('alert')
            }, 2500);
        }
    
        if(userName.trim().length < 5){
            handleName(name);
        }
        else if(userPassword.trim().length < 6){
            password.classList.add('alert');
            console.log(userMail);
            setTimeout(()=>{
                password.classList.remove('alert')
            }, 2500);
            return;

        }
        // console.log(password);
        // handleNameInput(name);
        // handleEmailInput(email);
    }

    const toggleShowPassword = (e)=>{
        const pwd = e.target.previousElementSibling;
       
        if(pwd.type ==="password"){
            pwd.type = "text";
        }
        else if(pwd.type === "text"){
            pwd.type = "password"
        }
    }
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [privacyStatus, setPrivacyStatus] = useState(false);
    console.log(privacyStatus);
    return (
        <div className="register">
        <div id="preloader"></div>
            <div className="registerHeaderWrapper">
                <div onClick={exitRegister} className="backBtn">
                    <span><FiArrowLeft /></span>
                </div>
                <div className="signupHeader">
                    <h2 className="title">Let's get you signed in</h2>
                    <p className="caption">The information you provide will help us deliver your product safely</p>
                </div>
                <div className="changeRegisterBtn">
                    <div className="registerBtn active">SIGN UP</div>
                    <div className="registerBtn">LOGIN</div>
                </div>
            </div>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <div className="formInputWrapper">
                        <input onChange={e=>setUserName(e.target.value)} type="text" className="formInputItem" placeholder="full name" />
                        <div className="inputStatus"><span className="error">Name too short</span><MdClose /></div>
                    </div>
                    <div className="formInputWrapper">
                        <input onChange={e=>setUserMail(e.target.value)} type="email" className="formInputItem" placeholder="email" />
                        <div className="inputStatus"><MdClose /></div>
                    </div>
                    <div className="formInputWrapper">
                        <input onChange={e=>setUserPassword(e.target.value)} type="password" className="formInputItem" placeholder="password" />
                        <div onClick={toggleShowPassword} className="inputStatus eye"><span className="error">invalid password</span><VscEye /></div>
                    </div>
                    <div className="formInputWrapper privacyPolicyWrapper">
                        <input type="checkBox" id="privacy-policy" className="privacyPolicy" />
                        <label htmlFor="privacy-policy" className="privacyText">I agree to the 
                            <a href="#terms$condition">terms and conditions</a>and 
                            <a href="#privacyPolicy">privacy policy</a>
                        </label>
                    </div>
                    <button className="submit" type="submit">Sign up</button>
                    {/* <button className="submit google" type="submit">Google</button> */}
                    <GoogleLogin
                        clientId="610576136639-3ctumks51d24u1b89fgc30cs0tdmn4fn.apps.googleusercontent.com"
                        render={renderProps => (
                        <button className="google submit" onClick={renderProps.onClick} 
                        disabled={renderProps.disabled}> 
                        <img className="googleImg" src={googleLogo} alt="google logo" /> Sign up with Google</button>
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </form>
                <div className="stepPagination">

                </div>
            </div>

        </div>
    )
}

export default Register
