import './infin.css';
import React from 'react';
import lightmode from '../../assests/light.png'
import darkmode from '../../assests/dark.png'
import settings from '../../assests/settings.png'
import compose from '../../assests/compose.png'
import { useState }from 'react';

// import Error from '../error/Error';
// import { useLocation, useNavigate} from 'react-router-dom';
// import base from "../../firebase";
// import {doc, getDoc,setDoc } from 'firebase/firestore/lite';
// import {isMobile } from 'react-device-detect';

function Board() {

  const [screen,setScreen] = useState('options flex light')

  return(
      <nav className='nav flex'>
          <form>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input className='searchpage' type='text' placeholder='search here'></input>
          </form>
        <div className={screen}>
          <img src={lightmode} alt='light mode' onClick={() => {setScreen('options flex light')}}></img>
          <img src={darkmode} alt='dark mode' onClick={() => {setScreen('options flex dark')}}></img>
          <img src={settings} alt='settings'></img>
          <img src={compose} alt='compose'></img>
          <label>Light Mode</label>
          <label>Dark Mode</label>
          <label>Settings</label>
          <label>Compose</label>
        </div>
      </nav>
  );
}


export default Board;
