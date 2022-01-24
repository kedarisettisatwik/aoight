import React from 'react';
import { useLocation } from 'react-router-dom';
import Error from '../error/Error';
import './dash.css';
// import base from "../../firebase";
// import { collection,getDocs, doc, getDoc } from 'firebase/firestore/lite';

const Ele = () => {

  // const location = useLocation();
  // if (location.state){
  //   return (
  //     <h2>Old User</h2>
  //   );
  // }else{
  //   return (<Error/>);
  // }

  return (
    <h2>old user </h2>
  );

}



function Board() {

  return(
    <>
    <div className='flex dash'>
          <Ele/>
    </div>
    </>
  );

}


export default Board;
