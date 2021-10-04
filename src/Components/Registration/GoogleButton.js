import React from 'react'
import googleLogo from './googleLogo.png'
import { GoogleLogin } from 'react-google-login';

const GoogleButton = ({ text }) => {
    const responseGoogle = (res)=>{
        console.log(res);
    }
    return (
        <div>
            <GoogleLogin
                        clientId="610576136639-3ctumks51d24u1b89fgc30cs0tdmn4fn.apps.googleusercontent.com"
                        render={renderProps => (
                        <button className="google submit" onClick={renderProps.onClick} 
                        disabled={renderProps.disabled}> 
                        <img className="googleImg" src={googleLogo} alt="google logo" /> {text}</button>
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
        </div>
    )
}

export default GoogleButton
