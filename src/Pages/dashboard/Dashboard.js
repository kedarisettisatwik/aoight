import React from 'react';
import { useLocation } from 'react-router-dom';
import Error from '../error/Error';
import './dash.css';

const Ele = () => {
  const location = useLocation();
  if (location.state){
    return (
      <>
       <section className='profile'>
         <h4>Aoight</h4>
         <div className='details'>
             <img src={location.state.photo} alt='profile_pic'></img>
             <h3>Name : {location.state.Name}</h3>
             <p>Email : {location.state.Email}</p>
         </div>
         <ul>
           <li>Dashboard</li>
           <li>Explore</li>
           <li>My Settings</li>
           <li>Calender</li>
         </ul>
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
    <div className='flex screen'>
          <Ele/>
    </div>
    </>
  );

}


export default Board;
