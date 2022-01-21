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

  const con_ref1 = React.createRef();
  const con_ref2 = React.createRef();

  const [classi,setClassi] = useState('input');

  const list = ['https://lh3.googleusercontent.com/a-/AOh14GiS1xDkL47MBrHjTGcHtWrR-VkjdGAlO9Dt-mZPsw=s96-c-rg-br100','satwik kedar','satwik1330@gamil.com'];

  const [details,setDetails] = useState(list);

  const Change1 = (e) => {
    setDetails([details[0],e.target.value,details[2]]);
 }

 const Blur1 = (e) => {
  if (e.target.value.length === 0){
    setDetails([details[0],list[1],details[2]]);
  }
  setClassi('input');
 }


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
           <h4>Choose your Profile Pic : </h4>
           <div className='pro_img flex'>
             <img src={details[0]} alt='pro'></img>
             <i className="fas fa-camera"></i>
           </div>
           <div className={classi} ref={con_ref1}>
             <label>User Name </label>
             <input type='text' value={details[1]} placeholder={list[1]} onFocus={() => setClassi('input active')} onBlur={Blur1} onChange={Change1} ref={con_ref2}></input>
             <i className="fas fa-pen options"></i>
           </div>
           <div className='input lock'>
             <label>Email </label>
             <input type='text' contentEditable='false' value={details[2]}></input>
             <i className="fas fa-lock options"></i>
           </div>
           <div className='buttons flex'>
             <button>cancel</button>
             <button>continue</button>
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
