import './infin.css';
import React from 'react';
import { useState }from 'react';
import Nav from './Nav.js'
import Side from './Side.js'

// import Error from '../error/Error';

// import { useLocation, useNavigate} from 'react-router-dom';
// import base from "../../firebase";
// import {doc, getDoc,setDoc } from 'firebase/firestore/lite';
// import {isMobile } from 'react-device-detect';

function Board() {

  const [cat,setCat] = useState('sort flex all')

  const cat_change = (a) => {
    setCat(a)
  }

  return(
    <section id='infin'>
      <Side/>
      <section className='main'>
        <Nav/>
        <section className='mails'>
          <div className={cat}>
            <div className='flex'>
              <span onClick={() => {cat_change('sort all flex')}}>All</span>
              <span onClick={() => {cat_change('sort read flex')}}>Read</span>
              <span onClick={() => {cat_change('sort unread flex')}}>Unread</span>
              <div className='line'></div>
            </div>
            <span className='flex select'>select</span>
          </div>

        </section>
      </section>
    </section>
  );
}


export default Board;
