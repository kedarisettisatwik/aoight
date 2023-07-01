import React, { useState } from 'react';
import { useNavigate   } from 'react-router-dom';
import VClogo from './images/videChatLogo.png';
import './styles/loginPage.css';

function VibeChats({history}){

    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const signUp = () => {
        navigate('/signup');
    };
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    
    return(
        <section className="mainPage login">
            <img src={VClogo} alt='logo' className='logo'></img>
            <form id='LogInForm'> 
                <h2>VibeChats</h2>
                <span>Email Address</span>
                <input type='email' placeholder='enter email @gmail.com'></input>
                <span>Password</span>
                <div className={`password ${passwordVisible ? 'active' : ''}`} style={{position:'relative'}}>
                    <input type={passwordVisible ? 'text' : 'password'} placeholder={`${passwordVisible ? 'secret key' : '****** ***'}`}></input>
                    <i className="fa-solid fa-eye eyeOpen" onClick={togglePasswordVisibility}></i>
                    <i className="fa-solid fa-eye-slash eyeClose" onClick={togglePasswordVisibility}></i>
                </div>
                <input type='submit' value='Continue to Chat'></input>
                <div className='up flex'>
                    <p>Not Yet Signed Up ?</p>
                    <label onClick={signUp}>SignUp Now</label>
                </div>
            </form>
        </section>
    )
}

export default VibeChats;