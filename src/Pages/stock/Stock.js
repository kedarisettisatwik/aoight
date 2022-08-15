import './stock.css';
import React from 'react';
import { useState }from 'react';

// import Error from '../error/Error';

// import { useLocation, useNavigate} from 'react-router-dom';
// import base from "../../firebase";
// import {doc, getDoc,setDoc } from 'firebase/firestore/lite';
// import {isMobile } from 'react-device-detect';

function Board() {

  var h = document.location.href;

  const [href,setHref] = useState(h)

  const searching = () => {
    document.location.href = 'https://www.google.com/search?q='+href
  }

  const changing = (e) => {
    setHref(e.target.value)
  }

  return(
    <div id='infin'>
      <nav className='nav flex'>

        <div className='location flex'>
          <i className="fa-solid fa-angle-left"></i>
          <i className="fa-solid fa-angle-right"></i>
          <i className="fa-solid fa-arrow-rotate-left"></i>  
        </div>

        <div className='search flex'>
          <i className="fa-solid fa-shield-halved"></i>
          <input className='searchpage' type='text' placeholder='search here' value={href} onChange={changing}></input>
          <i className="fa-solid fa-magnifying-glass" onClick={searching}></i>
        </div>

        <div className='options flex'>
          <i className="fa-solid fa-bookmark"></i>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
          <i className="fa-solid fa-link"></i>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>

      </nav>
    </div>
  );
}


export default Board;
