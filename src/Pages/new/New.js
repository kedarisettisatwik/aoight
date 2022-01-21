import React,{ useState ,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Error from '../error/Error';
// import base from "../../firebase";
// import { collection,getDocs, doc, getDoc } from 'firebase/firestore/lite';

const Ele = () => {
    const location = useLocation();
    if (location.state){
        return (<h2>Hello , New User </h2>);
    }else{
        return (<Error/>);
    }
}



function Board() {

  return(
    <>
    <div className='flex screen'>
          <Ele/>
    </div>
    </>
  );

}


export default Board;
