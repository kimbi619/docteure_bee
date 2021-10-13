import React, { useState } from 'react';
import { MdClose } from 'react-icons/md'
import { VscEye } from 'react-icons/vsc';
import GoogleButton from './GoogleButton';
import {Link} from 'react-router-dom';

import './Register.css'

const Register = () => {
    // const exitRegister = (e)=>{
    //     e.target.parentElement.parentElement.style.display = "none"
    // }
    

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
            setTimeout(()=>{
                password.classList.remove('alert')
            }, 2500);
            return;

        }else if(check === false){
            alert("You must agree to our policy")
        }
        // console.log(password);
        // handleNameInput(name);
        // handleEmailInput(email);
    }
    const checkState = ()=>{
        setCheck(!check);
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
    const [check, setCheck] = useState(false)
    const [userPassword, setUserPassword] = useState('');
    // const [privacyStatus, setPrivacyStatus] = useState(false);
    // console.log(privacyStatus);
    return (
        <div className="">
            <div className="formContainer">
                <h1 className="registerTitleDesktop">Sign Up </h1>
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
                        <input onChange={checkState} type="checkBox" id="privacy-policy" className="privacyPolicy" />
                        <label htmlFor="privacy-policy" className="privacyText">I agree to the 
                            <a href="#terms$condition">terms and conditions</a>and 
                            <a href="#privacyPolicy">privacy policy</a>
                        </label>
                    </div>
                    <p className="changeToLogin">Already have an account? 
                        <Link to="/register/login" className="log">log in</Link>
                    </p>
                    <button className="submit" type="submit">Sign up</button>
                    <GoogleButton text="Sign up with Google" />
                    
                </form>
                <div className="stepPagination">

                </div>
            </div>

        </div>
    )
}

export default Register
