import './App.css';
import './index.css';
import Values from './Values';
import Join from './Join';
import Reviews from './Review';
import coder from './assests/coder.png'; 
import React from 'react';
import { useNavigate } from 'react-router-dom';

// import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";

function Intro() {

  const navigate = useNavigate();

  const con_ref = React.createRef();

  function goto1(){
    var top1 = con_ref.current.getBoundingClientRect().top;
    window.scrollBy(0,top1);
  }

  const Google_sign = () =>{
      const provider = new GoogleAuthProvider();
      const auth = getAuth();

      signInWithPopup(auth, provider).then((result) => {
        //  console.log(result); 
         const credential = GoogleAuthProvider.credentialFromResult(result);
         const token = credential.accessToken;
        const user = result.user;
        const user_data = {"Name" : user.displayName,
                           "Email" : user.email,
                          "Verification" : user.emailVerified,
                          "Photo": user.photoURL,
                          "LastLogin":user.metadata.lastLoginAt,
                          "Uid":user.uid};
        // console.log(user_data);
        console.log(user);
        console.log(token);
        
        navigate('/aoight-load',{state:user_data,replace:false});

      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <>

      <div className="flex" id='home'>
        <div className='box1'>
          <div className='circle'></div>
          <h1 className='name'> <label>Aoight</label> <br></br> App of <span>Infinity</span>. </h1>
          <p>This will make your messaging, managing your works easier.<br></br>
          Allow's you to chat with your friends, manage your tasks, create a portifilo etc..</p>
          <div className='button'>
            <button onClick={Google_sign}>Get Started</button>
            <button onClick={goto1}>Download <i className="fas fa-cloud-download-alt"></i> </button>
          </div>
        <Join />
        </div>
        <Values/>
      </div>

      <div className='flex' id='contact'>
        <Reviews/>
        <div className='box2' ref={con_ref}>
          <h1>Contact </h1>
          <a className="flex" href='tel:+917834221286' target='_blank' rel="noreferrer"> <i className="fas fa-phone-alt"></i> 7834221286</a>
          <a className="flex" href='mailto:Aoighthelp@gmail.com' target='_blank' rel="noreferrer"><i className="fas fa-envelope"></i> Aoighthelp@gmail.com</a>
          <h3>Follow Us ! </h3>
          <a className="flex" href='https://www.instagram.com/satwikkedaresetti/' target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i> satwikkedaresetti </a>
          <a className="flex" href='https://www.youtube.com/channel/UCpLOopnR9TX9b1fjcDpapsw' target='_blank' rel="noreferrer"><i className="fab fa-youtube"></i> Kedar Satwik </a>
          <img src={coder} alt='coder'></img>
        </div>
      </div>

      <div id='companies'>
        <h4>We are here because of these </h4>
        <div className='list flex'>
          <a href='https://firebase.google.com/' rel='noreferrer' target='_blank'>Firebase</a>
          <a href='https://github.com/' rel='noreferrer' target='_blank'>Github</a>
          <a href='https://www.npmjs.com/' rel='noreferrer' target='_blank'>Npm.js</a>
          <a href='https://reactjs.org/' rel='noreferrer' target='_blank'>React.js</a>
          <a href='https://www.emailjs.com/' rel='noreferrer' target='_blank'>Email.js</a>
        </div>
      </div>

    </>
  );
  
}

export default Intro;
