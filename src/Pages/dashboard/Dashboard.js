import React from 'react';
import { useLocation } from 'react-router-dom';
import Error from '../error/Error';

const Ele = () => {
  const location = useLocation();
  if (location.state){
    return (
      <>
       <section className='screen'>
         <img src={location.state.photo} alt='profile_pic'></img>
          <h3>Name : {location.state.Name}</h3>
          <p>Email : {location.state.Email}</p>
       </section>
      </>
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
