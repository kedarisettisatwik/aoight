import React from 'react';
import { useLocation } from 'react-router-dom';
import Error from '../error/Error';

const Ele = () => {
  const location = useLocation();
  if (location.state){
    return (
      <h2>Name : {location.state.Name}</h2>
    );
  }else{
    return (<Error/>);
  }
}



function Board() {

  return(
    <>
    <div className='flex' style={{"width":"100%","height":"100vh","position":"relative"}}>
          <Ele/>
    </div>
    </>
  );

}


export default Board;
