import React, { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import VClogo from './images/videChatLogo.png';
import './styles/loginPage.css';

import {firestore} from '../../firebase';
import firebase from '../../firebase';
import { auth } from '../../firebase';

const c = ["#ffdd99","#ffb3b3","#99ff99","#ffb3ff","#33ccff"];
const col = c[Math.floor(Math.random()*5)];

const handleNewUser = (result) => {
  firestore.collection('users').doc(result.uid).collection('profileDetails').doc('details').set(
    {
      UserMail : result.email,
      userName : result.displayName,
      userStatus : "online",
      userColor : col,
      userPic : ""
    })
  .then(() => {
      // User data added successfully
      console.log("data added");
  })
  .catch((error) => {
      // Error adding user data to the database
      console.error('Error adding user data:', error);
  });
}

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      // Check if the user is a new user
      if (result.additionalUserInfo.isNewUser) {
        // Call your function for new users
        handleNewUser(result.user);
      } else {
        // Handle sign-in for existing users
        window.location.replace("/aoight/#/vibeChats/dashBoard");
      }
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