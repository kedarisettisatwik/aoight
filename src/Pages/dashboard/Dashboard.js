import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Error from '../error/Error';
// const user = JSON.parse(sessionStorage.getItem('user'));

function Board() {

  const location = useLocation();
  const navigate = useNavigate();

  if (location.state){
    return (
      <>
         <div>
             <h2>Name : {location.state.Name} </h2>
         </div>
      </>
    );
  }else{
    return (
      <Error/>
    );
  }
}


export default Board;
