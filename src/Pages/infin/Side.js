import './infin.css';
import React from 'react';
import compose from '../../assests/compose.png';
import mail from '../../assests/email.png';

// import { useState }from 'react';
// import Error from '../error/Error';
// import { useLocation, useNavigate} from 'react-router-dom';
// import base from "../../firebase";
// import {doc, getDoc,setDoc } from 'firebase/firestore/lite';
// import {isMobile } from 'react-device-detect';

function Board() {

  return(
      <div className='sidebar'>

        <div className='profile flex'>
            <div className='logo'>KS</div>
            <div className='name flex'>
                <h3>Kedar satwik</h3>
                <p>satwik1330@gmail.com</p>
            </div>
        </div>

        <div className='compose flex'>
          <img src={compose} alt='compose'></img>
          <label>New Message</label>
        </div>

        <div className='button flex'>
          <img src={mail} alt='mail'></img>
          <label>Inbox</label>
        </div>

        
      </div>
  );
}


export default Board;
