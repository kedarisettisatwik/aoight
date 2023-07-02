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

    const [mailInput, setMailInput] = useState('');
    const [passInput, setPassInput] = useState('');

    const handleMailInputChange = (e) =>{
        setMailInput(e.target.value);
    };

    const handlePassInputChange = (e) => {
        setPassInput(e.target.value);
    }
    
    const registerForm = (e) => {
        e.preventDefault();
        console.log(mailInput);
        console.log(passInput);
    }
    
    return(
        <section className="mainPage login">
            <img src={VClogo} alt='logo' className='logo'></img>
            <form id='LogInForm' onSubmit={registerForm}> 
                <h2>VibeChats</h2>
                <span>Email Address</span>
                <input type='email' placeholder='enter email @gmail.com' required value={mailInput} onChange={handleMailInputChange}></input>
                <span>Password</span>
                <div className={`password ${passwordVisible ? 'active' : ''}`} style={{position:'relative'}}>
                    <input type={passwordVisible ? 'text' : 'password'} required placeholder={`${passwordVisible ? 'secret key' : '****** ***'}`} value={passInput} onChange={handlePassInputChange}></input>
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