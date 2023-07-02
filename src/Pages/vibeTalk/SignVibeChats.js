import React, { useState } from 'react';
import VClogo from './images/videChatLogo.png';
import './styles/loginPage.css';

const colors = ["#ff6666","#679f67","#ffcc66","#66a3ff"];

const c = colors[Math.floor(Math.random() * 4)];

function SignVibeChats({history}){
    
    const signIn = () => {
        window.history.back();
    };

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const [classname,setClassName] = useState('pro user');
    const [nameInput, setNameInput] = useState('');
    const [mailInput, setMailInput] = useState('');
    const [passInput, setPassInput] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [imgSrc,setImgSrc] = useState(null);

    const handleNameInputChange = (e) => {
        if (e.target.value === ''){  
            if (imgSrc == null) setClassName('pro user');
            else setClassName('pro dp');
            setNameInput(e.target.value);
        }else{
            if (imgSrc == null) setClassName('pro char');
            else setClassName('pro dp');
            setNameInput(e.target.value);
        }
    };

    const handleMailInputChange = (e) =>{
        setMailInput(e.target.value);
    };

    const handlePassInputChange = (e) => {
        setPassInput(e.target.value);
    }
    
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setClassName('pro dp');
            setImgSrc(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
            setClassName('pro user');
            setImgSrc(null);
        }
    };

    const registerForm = (e) => {
        e.preventDefault();
        // console.log(nameInput);
        // console.log(mailInput);
        // console.log(passInput);
        // console.log(imgSrc);
        if (nameInput && nameInput.length >= 2 && nameInput.match(/^[A-Za-z]{2}/) && passInput && passInput.length >= 3) {
                // no error
                alert("account created succesfully");
        }else if (passInput && passInput.length >= 3){
            // error in name
            alert("name should start with atleast 2 aplhabets");
        }else{
            // error in password
            alert("password must have more than 3 letters");
        }
    }

    return(
        <section className='mainPage signup'>
        <img src={VClogo} alt='logo' className='logo'></img>
            <form id='SignForm' onSubmit={registerForm}> 
                <h2>VibeChats</h2>
                <div className={classname} style={{backgroundColor:c}}>
                    <img src={imgSrc} alt='dp' className='image'></img>
                    <span className='text'>{nameInput[0]}</span>
                    <i className="fa-regular fa-circle-user"></i>
                </div>
                <div className='details flex'>
                    <div className='name'>
                        <span>Name</span>
                        <input type='text' placeholder='Hello Mr / Ms ' value={nameInput} required onChange={handleNameInputChange}></input>
                    </div>
                    <div className="dp">
                        <span>Select Image</span>
                        <input type='file' accept='image/*' onChange={handleFileInputChange}></input>
                    </div>
                </div>
                <span>Email Address</span>
                <input type='email' placeholder='enter email @gmail.com' value={mailInput} required onChange={handleMailInputChange}></input>
                <span>Password</span>
                <div className={`password ${passwordVisible ? 'active' : ''}`} style={{position:'relative'}}>
                    <input type={passwordVisible ? 'text' : 'password'} required placeholder={`${passwordVisible ? 'secret key' : '****** ***'}`} value={passInput} onChange={handlePassInputChange}></input>
                    <i className="fa-solid fa-eye eyeOpen" onClick={togglePasswordVisibility}></i>
                    <i className="fa-solid fa-eye-slash eyeClose" onClick={togglePasswordVisibility}></i>
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

export default SignVibeChats;