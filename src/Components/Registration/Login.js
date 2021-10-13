import React, { useState } from 'react';
import { MdClose } from 'react-icons/md'
import { VscEye } from 'react-icons/vsc';
import GoogleButton from './GoogleButton';
import { Link } from 'react-router-dom';

import './Register.css'

const Register = () => {
    
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target.firstElementChild;
        const name = form;
        const email = form.nextElementSibling;
        const password = email;
        
        
        
        const handleName=(params)=>{
            params.classList.add('alert');
            setTimeout(()=>{
                params.classList.remove('alert')
            }, 2500);
        }
        console.log(userPassword);
    
        if(userPassword.trim().length < 6){
            password.classList.add('alert');
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
    const [userMail, setUserMail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    // const [privacyStatus, setPrivacyStatus] = useState(false);
    // console.log(privacyStatus);
    return (
        <div className="">
            
            <div className="formContainer">
                <h1 className="registerTitleDesktop">Log In </h1>
                <form onSubmit={handleSubmit}>
                    <div className="formInputWrapper">
                            <input onChange={e=>setUserMail(e.target.value)} type="email" className="formInputItem" placeholder="email" value={userMail} />
                            <div className="inputStatus"><MdClose /></div>
                    </div>
                    <div className="formInputWrapper">
                        <input onChange={e=>setUserPassword(e.target.value)} type="password" className="formInputItem" placeholder="password" />
                        <div onClick={toggleShowPassword} className="inputStatus eye"><span className="error">invalid password</span><VscEye /></div>
                    </div>
                    
                    <button className="submit" type="submit">Log in</button>
                    <GoogleButton text="Login with google" />
                    <p className="changeToLogin .logLogin">
                        <Link to="/register/resetpassword" className="log">forgot password</Link>
                    </p>
                    
                </form>
                <div className="stepPagination">

                </div>
            </div>
            <p className="changeToLogin .logLogin">Need an account
                <Link to="/register/signup" className="log">click to sign up</Link>
            </p>

        </div>
    )
}

export default Register
