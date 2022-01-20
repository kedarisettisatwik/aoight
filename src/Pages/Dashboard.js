import React from 'react';
import {useLocation} from 'react-router-dom';

// const user = JSON.parse(sessionStorage.getItem('user'));

function Board() {

  const location = useLocation();

  if (location.state){
    return (
      <>
         <div>
             <h2>Name : {location.state.Name} </h2>
         </div>
      </>
    );
  }else{
    return <h2>Oops !, something went wrong</h2>
  }
}


export default Board;
