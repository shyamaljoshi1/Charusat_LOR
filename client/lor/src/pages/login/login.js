import React from 'react';
import './login.css';
import logo from '../../assets/Images/logo.png'
import google from '../../assets/Images/googleLogo.png'
import linkedin from '../../assets/Images/linkedinLogo.png'

const Login = () => {
    const googleLogin = () => {
        window.open("http://localhost:3001/auth/google", "_self");
    }
    return (
        <div className="login__frame">
            <div className="login__frame__center">
                <img className='logo' src={logo} alt="chrausat-logo" />
                <div className="login__text">Login With</div>
                <div className="logo__container">
                    <div onClick={googleLogin}><img className="logo__container__google" src={google} alt="google logo" /></div>
                    <div><img className="logo__container__linkedin" src={linkedin} alt="linkedin logo" /></div>
                </div>
            </div>
        </div>
    );
}
export default Login;   