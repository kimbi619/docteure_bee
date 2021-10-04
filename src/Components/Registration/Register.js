
import { FiArrowLeft } from 'react-icons/fi'
import { Link, Route, Switch} from 'react-router-dom'
import './Register.css'
import Signup from './Signup'
import Login from './Login'

const Register = () => {
    const exitRegister = (e)=>{
        e.target.parentElement.parentElement.style.display = "none"
    }

    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     const form = e.target.firstElementChild;
    //     const name = form;
    //     const email = form.nextElementSibling;
    //     const password = email.nextElementSibling;
        
        
        
    //     const handleName=(params)=>{
    //         params.classList.add('alert');
    //         setTimeout(()=>{
    //             params.classList.remove('alert')
    //         }, 2500);
    //     }
    
    //     if(userName.trim().length < 5){
    //         handleName(name);
    //     }
    //     else if(userPassword.trim().length < 6){
    //         password.classList.add('alert');
    //         console.log(userMail);
    //         setTimeout(()=>{
    //             password.classList.remove('alert')
    //         }, 2500);
    //         return;

    //     }
    //     // console.log(password);
    //     // handleNameInput(name);
    //     // handleEmailInput(email);
    // }

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
                    <Link to="/register/signup"><div className="registerBtn active">SIGN UP</div></Link>
                    <Link to="/register/login"><div className="registerBtn">LOGIN</div></Link>
                </div>
            </div>
            <Switch>
                <Route to="/register/login" component={Login} />
                <Route to="/register/signup" component={Signup} />
            </Switch>

        </div>
    )
}

export default Register
