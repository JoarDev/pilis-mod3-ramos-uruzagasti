import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import useLocalStorage from 'use-local-storage';

import '/src/index.css';

export const Login = () => {


    return (
        <div className="appForm">
            <div className="login">
                <h1>Login - Weather App</h1>
                <div className="container">
                    <div className="top"></div>
                    <i class='fab fa-google'></i>
                    <i class='fab fa-facebook-square'></i>
                    <i class='fab fa-linkedin'></i>
                    <i class='fab fa-twitter-square'></i>
                    <i class='fab fa-apple'></i>
                </div>
                <p className="divider"><span>Or</span></p>
                <form >
                    <label>E-mail</label>
                    <input
                        type='email'
                        placeholder='Enter your email'
                    />
                    <label>Password</label>
                    <input
                        type='password'
                        placeholder='Enter your password'
                    />
                    <div className='remember'>
                        <input
                            type="checkbox"
                            checked='checked'
                        />
                        <p> Remember Me</p>
                        <button >Log In</button>
                    </div>
                </form>
                <div className='bottom'>
                    <p>Forget your password</p>
                    <a href='/'>Reset Password</a>
                </div>
                <p className='create'>Create Account</p>
            </div>
            <div className="theme-toggle">
                <h2>Light Theme</h2>
                <i class='fas fa-toggle-on'></i>
            </div>
        </div>
    )
}