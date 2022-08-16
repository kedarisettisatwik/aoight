import './infin.css';
import React from 'react';
// import { useState }from 'react';
import Nav from './Nav.js'
import Side from './Side.js'

// import Error from '../error/Error';

// import { useLocation, useNavigate} from 'react-router-dom';
// import base from "../../firebase";
// import {doc, getDoc,setDoc } from 'firebase/firestore/lite';
// import {isMobile } from 'react-device-detect';

function Board() {

  return(
    <section id='infin'>
      <Side/>
      <section className='main'>
        <Nav/>
      </section>
    </section>
  );
}


export default Board;
