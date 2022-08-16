import './stock.css';
import React from 'react';
// import { useState }from 'react';
// import Error from '../error/Error';
// import { useLocation, useNavigate} from 'react-router-dom';
// import base from "../../firebase";
// import {doc, getDoc,setDoc } from 'firebase/firestore/lite';
// import {isMobile } from 'react-device-detect';

function Board() {

  return(
      <nav className='nav flex'>

        <div className='search flex'>
          <form>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input className='searchpage' type='text' placeholder='search here'></input>
          </form>
        </div>

        <div className='options'>
            {/* <i className="fa-solid fa-message"></i>
            <i className="fa-solid fa-user-group"></i>
            <i className="fa-solid fa-gear"></i> */}
        </div>

        <div className='profile flex'>
            <div className='logo'>KS</div>
            <div className='name flex'>
                <h3>Kedar satwik</h3>
                <p>satwik1330@gmail.com</p>
            </div>
        </div>

      </nav>
  );
}


export default Board;
