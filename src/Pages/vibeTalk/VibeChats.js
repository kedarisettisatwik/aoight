import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import VClogo from './images/videChatLogo.png';
import './styles/loginPage.css';

import firebase from '../../firebase';
import { auth } from '../../firebase';

const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
        // Handle successful sign-in
        console.log('Signed in successfully:', result.user);
      })
      .catch((error) => {
        // Handle sign-in error
        console.error('Error signing in:', error);
      });
};

function VibeChats(){

    const navigate = useNavigate();

    useEffect(() => {
      // Check if the user is already authenticated
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, redirect to another page
          window.location.replace("/aoight/#/vibeChats/dashBoard");
        }
      });

      return () => {
        // Clean up the listener
        unsubscribe();
      };
    }, [navigate]);

    return(
        <section className="mainPage login">
            <img src={VClogo} alt='logo' className='logo'></img>
            <div id='LogInForm'> 
                <h2>VibeChats</h2>
                <span>Continue to Chat</span>
                <button onClick={signInWithGoogle} className='googleBtn'>Log in With Google </button>
            </div>
        </section>
    )
}

export default VibeChats;