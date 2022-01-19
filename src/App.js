import './App.css';
import './index.css';
import Values from './Values';
import Join from './Join';
import Reviews from './Review';
import coder from './assests/coder.png'; 
import React from 'react';

import Dash from './Pages/Dashboard';

// import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



function App() {

  const con_ref = React.createRef();

  function goto1(){
    var top1 = con_ref.current.getBoundingClientRect().top;
    window.scrollBy(0,top1);
  }

  const Google_sign = () =>{
    
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    
    signInWithPopup(auth, provider).then((result) => {
      // console.log(result); 
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      // alert(user.photoURL);

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
            <button onClick={goto1}>Contact </button>
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
      
    </>
  );
  
}


export default App;
