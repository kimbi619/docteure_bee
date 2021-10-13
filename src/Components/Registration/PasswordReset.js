import React, { useState } from 'react';
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom';


const PasswordReset = () => {
    
    const [userMail, setUserMail] = useState('');
    const handleSubmit = (e)=>{
    }
 
    return (
        <div className="">
            <div className="formContainer">
                <h1 className="registerTitleDesktop">Reset Password </h1>
                <form onSubmit={handleSubmit}>
                    <div className="formInputWrapper">
                        <input onChange={e=>setUserMail(e.target.value)} type="email" className="formInputItem" placeholder="email" />
                        <div className="inputStatus"><MdClose /></div>
                    </div>
                    <button className="submit" type="submit">Reset Password</button>
                    <p className="changeToLogin">Already have an account? 
                        <Link to="/register/login" className="log">log in</Link>
                        <Link to="/register/signup" className="log blog">click to sign up</Link>
                    </p>
                </form>
            </div> 
        </div>
    )
}

export default PasswordReset
