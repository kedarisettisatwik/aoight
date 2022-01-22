import React,{ useState ,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Error from '../error/Error';
import { CountryDropdown } from 'react-country-region-selector';
import './new1.css';
import '../color_plate.css';
import Welcome from './Welcome.png';

// import base from "../../firebase";
// import { collection,getDocs, doc, getDoc } from 'firebase/firestore/lite';

// const Ele = () => {
//     const location = useLocation();
//     if (location.state){
//         return (<Draw/>);
//     }else{
//         return (<Error/>);
//     }
// }

const Draw = () => {

  return (
    <>
    <div className='dec flex'>
      <img src={Welcome} alt='welcome'></img>
    </div>
    <div className='form flex'>
      <div className='box1'> 
           <Box2/>
      </div>
    </div>
    </>
  );

}

const Box2 = () => {

  const con_ref1 = React.createRef();

  const [classi,setClassi] = useState('input');

  const list = ['https://lh3.googleusercontent.com/a-/AOh14GiS1xDkL47MBrHjTGcHtWrR-VkjdGAlO9Dt-mZPsw=s96-c-rg-br100','satwik kedar','satwik1330@gamil.com',"India"];

  const [details,setDetails] = useState(list);

  const Change1 = (e) => {
    setDetails([details[0],e.target.value,details[2],details[3]]);
 }

 const Blur1 = (e) => {
  if (e.target.value.length === 0){
    setDetails([details[0],list[1],details[2],details[3]]);
  }
  setClassi('input');
}

const Country1 = (val) => {
  if (val === ''){
    setDetails([details[0],details[1],details[2],list[3]]);
  }else{
    setDetails([details[0],details[1],details[2],val]);
  }
}

return (
      <div className='box2 active'>
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
             <input type='text' value={details[1]} placeholder={list[1]} onFocus={() => setClassi('input active')} onBlur={Blur1} onChange={Change1}></input>
             <i className="fas fa-pen options"></i>
           </div>
           <div className='input lock'>
             <label>Email </label>
             <input type='text' contentEditable='false' value={details[2]}></input>
             <i className="fas fa-lock options"></i>
           </div>
           <div className='input'>
             <label> Country </label>
             <CountryDropdown value={details[3]} onChange={(val) => {Country1(val)}}/>
             <i className="fas fa-pen options"></i>
           </div>
           <div className='buttons flex'>
             <button>cancel</button>
             <button onClick={() => {console.log(details);alert("done");}}>continue</button>
           </div>
        </div>
  );

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
