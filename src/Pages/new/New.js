import React,{ useState ,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Error from '../error/Error';
import './new1.css';
import '../color_plate.css';
import Welcome from './Welcome.png';

// import base from "../../firebase";
// import { collection,getDocs, doc, getDoc } from 'firebase/firestore/lite';

const Ele = () => {
    // const location = useLocation();
    // if (location.state){
    //     return (<Draw/>);
    // }else{
    //     return (<Error/>);
    // }
}

const Draw = () => {
  return (
    <>
    <div className='dec flex'>
      <img src={Welcome} alt='welcome'></img>
    </div>
    <div className='form flex'>
      <div className='box1'>
        <div className='box2'>
            <p><strong>Hello,</strong> we are very Happy to see you here, 
                 <br></br> We have Just <strong> One </strong> more step 
                 <br></br> We have gathered some information about you,
                 <br></br> Please Fill remaining details and continue.</p>
           <div className='image flex'><img src={Welcome} alt='welcome'></img></div>
           <div className='input'>
             <label>Name</label>
             <input type='text' placeholder='User Name' required></input>
           </div>
        </div>
      </div>
    </div>
    </>
  )
}


function Board() {

  return(
    <>
    <div className='flex screen'>
          {/* <Ele/> */}
          <Draw/>
    </div>
    </>
  );

}


export default Board;
