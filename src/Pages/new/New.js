import React,{ useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Error from '../error/Error';
import './new1.css';
import '../color_plate.css';
import Welcome from './Welcome.png';

import base from "../../firebase";
import { collection , getDocs , getDoc , doc , setDoc , deleteDoc } from 'firebase/firestore/lite';

const Ele = () => {
    const location = useLocation();
    if (location.state){
        return (<Draw/>);
    }else{
        return (<Error/>);
    }
}

const Draw = () => {

  const location = useLocation();

  const list2 = [location.state.photo,location.state.Name,location.state.Email,"General"];

  async function Fetchbefore(){
    // console.log('add data after load');

    await setDoc(doc(base, "mail search", location.state.uid), { 
      mail : JSON.stringify([list2[2], location.state.uid])
     }); 
    
     await setDoc(doc(base, "name search", location.state.uid), { 
      name : JSON.stringify([list2[1], location.state.uid])
     });

     await setDoc(doc(base,"General",location.state.uid), { 
      tag : JSON.stringify(location.state.uid)
     });

     var sending2 = {
      "Photo":location.state.photo,
      "Name":location.state.Name,
      "Email":location.state.Email,
      "Tag":"General",
      "Uid":location.state.uid
    }

     await setDoc(doc(base, location.state.uid, "basic"), { 
      basic : JSON.stringify(sending2)
     }); 
    
  }

  Fetchbefore();

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
  
  const navigate = useNavigate();

  const location = useLocation();

  const con_ref1 = React.createRef();

  const [classi,setClassi] = useState('input');

  const list = [location.state.photo,location.state.Name,location.state.Email,"General"];

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

const Cat1 = (e) => {
  var l = e.target.value;
  setDetails([details[0],details[1],details[2],l]);
}

const [sending,setSend] = useState("load"); 

var x = 0;

async function Fetchdata(){

  setSend("load active");

  var sending1 = {
    "Photo":details[0],
    "Name":details[1],
    "Email":details[2],
    "Tag":details[3],
    "Uid":location.state.uid
  }

  function Navi(){
    if (x === 8){
      navigate('/aoight-dashboard',{state:location.state,replace:true});
    }
    console.log(x);
  }

  await deleteDoc(doc(base, location.state.uid, "basic"))
  .then((result) => {console.log("basic del");x += 1;Navi()}).catch((error) => {console.log(error)}); 

  await deleteDoc(doc(base, "mail search", location.state.uid))
  .then((result) => {console.log("mail del");x += 1;Navi()}).catch((error) => {console.log(error)}); 

  await deleteDoc(doc(base, "name search", location.state.uid))
  .then((result) => {console.log("name del");x += 1;Navi()}).catch((error) => {console.log(error)}); 

  await deleteDoc(doc(base, "General", location.state.uid))
  .then((result) => {console.log("tag del");x += 1;Navi()}).catch((error) => {console.log(error)}); 
    
  await setDoc(doc(base, "mail search", location.state.uid), { 
    mail : JSON.stringify([details[2], location.state.uid])
   }).then((result) => {console.log("mail send");x += 1;Navi()}).catch((error) => {console.log(error)}); 
  
   await setDoc(doc(base, "name search", location.state.uid), { 
    name : JSON.stringify([details[1], location.state.uid])
   }).then((result) => {console.log("name send");x += 1;Navi()}).catch((error) => {console.log(error)});

   await setDoc(doc(base,details[3],location.state.uid), { 
    tag : JSON.stringify(location.state.uid)
   }).then((result) => {console.log("tag ok");x += 1;Navi()}).catch((error) => {console.log(error)});

   await setDoc(doc(base, location.state.uid, "basic"), { 
    basic : JSON.stringify(sending1)
   }).then((result) => {console.log("basic ok");x += 1;Navi()}).catch((error) => {console.log(error)}); 

}



var list1 = ["General","Arts","Athelete","Author","Advertising",
             "Bussiness","Book","Beauty","Bar",
             "College","community","cloths","cooking","contractor","camera","commercial",
             "Design & Fashion","DJ","Dancer","Digital creator","Doctor","Driving","Developer",
             "Education","enterpreneur","e-commerce","entertainment","electronics","electrical","editor","engineering",
             "food","financial","Fashion","farm","furniture",
             "games","gym","grocery","graphics","government","garden","gift",
             "health","hotel","hospital","hardware",
             "IT","industry","ice cream","internet","insurance",
             "jewelry","journalist",
             "kitchen",
             "library",
             "Music","movie","marketing","medical","media","magazine",
             "news","NGO","nursing",
             "office",
             "photographer","politician","pharmacy","pizza","professor",
             "Real Estate","resturant","radio","retial",
             "school","song","shopping","sports","social","solider","security","software",
             "travel","tv","train","tax",
             "urban","uniform",
             "website desinger","water","wine",
             "Xerox",
             "Yoga",
             "zoo"];
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
           <h4> What describes you the best ? </h4>
           <div className='input' style={{"margin":"10px 0"}}>
             <select value={details[3]} onChange={(e) => {Cat1(e)} }>
                {
                  list1.map(item => <option value={item}>{item}</option>)
                }
             </select>
             <i className="fas fa-pen options"></i>
           </div>
           <h2 className={sending}>Loading</h2>
           <div className='buttons flex'>
             <button onClick={() => setDetails(list)}>cancel</button>
             <button onClick={Fetchdata}>continue</button>
           </div>
        </div>
  );

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
