import React, { useState } from 'react';
import { useNavigate   } from 'react-router-dom';
import './styles/loginPage.css';

function SignVibeTalk({history}){

    const navigate = useNavigate();

    const signIn = () => {
        navigate('/vibeTalk'); // Navigates to the '/signup' route
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return(
        <section className='mainPage flex' style={{backgroundColor:'#ff6666'}}>
            <form id='SignForm'> 
                <h2>VibeTalk</h2>
                <div className='details flex'>
                    <div className='name'>
                        <span>Name</span>
                        <input type='text' placeholder='Hello Mr / Ms '></input>
                    </div>
                    <div className='dob'>
                        <span>BirthDate</span>
                        <input type='date' value='2000-01-01'></input>
                    </div>
                </div>
                <span>Email Address</span>
                <input type='email' placeholder='enter email @gmail.com'></input>
                <span>Password</span>
                <div className={`password ${passwordVisible ? 'active' : ''}`} style={{position:'relative'}}>
                    <input type={passwordVisible ? 'text' : 'password'} placeholder='*******'></input>
                    <i className="fa-solid fa-eye eyeOpen" onClick={togglePasswordVisibility}></i>
                    <i className="fa-solid fa-eye-slash eyeClose" onClick={togglePasswordVisibility}></i>
                </div>
                <div className="dp">
                    <span>Select Image</span>
                    <input type='file' accept='image/*'></input>
                </div>
                <input type='submit' value='Continue to Chat'></input>
                <div className='up flex'>
                    <p>Already have Account ?</p>
                    <label onClick={signIn}>LogIn Now</label>
                </div>
            </form>
        </section>
    )
}

export default SignVibeTalk;