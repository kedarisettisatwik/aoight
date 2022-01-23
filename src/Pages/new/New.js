import React,{ useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Error from '../error/Error';
import './new1.css';
import '../color_plate.css';
import Welcome from './Welcome.png';

import Resizer from 'react-image-file-resizer';

import base from "../../firebase";
import { doc , setDoc , deleteDoc , deleteField , updateDoc } from 'firebase/firestore/lite';

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

  async function Fetchbefore(){
    // console.log('add data after load');

    var key1 = location.state.uid;

    var mail_obj = {};

    mail_obj[key1] = location.state.Email;

    await setDoc(doc(base, "search","1mail"),mail_obj,{merge:true}); 

    var name_obj = {};

    name_obj[key1] = location.state.Name;

    await setDoc(doc(base, "search","2name"),name_obj,{merge:true});

    var tag_obj = {};

    tag_obj[key1] = location.state.uid;

    await setDoc(doc(base,"search","General"),tag_obj,{merge:true});

    var sending2 = {
      "Photo":location.state.photo,
      "Name":location.state.Name,
      "Email":location.state.Email,
      "Tag":"General",
      "Uid":location.state.uid
    }

    await setDoc(doc(base,"users",location.state.uid,"profile","visible"),sending2,{merge:true}); 
    

  }

  Fetchbefore();

  return (
    <>
    <Box2/>
    </>
  );

}

const Box2 = () => {
  
  const navigate = useNavigate();

  const location = useLocation();

  const con_ref1 = React.createRef();

  const file_ref = React.createRef();

  const my_img = React.createRef();

  const [classi,setClassi] = useState('input');

  const list = [location.state.photo,location.state.Name,location.state.Email,"General"];

  const [details,setDetails] = useState(list);

  const [img_s,setImg_s] = useState({"--img": "url("+details[0]+")","backgroundSize":"cover","backgroundPosition":"center"});

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

const Image_up = (e) => {
  // var im = e.target.value;
  // console.log(im);
  const fi = file_ref.current.files[0];
  // if (fi){
  //   const reader = new FileReader();
  //   reader.onload = function(){
  //       const result = reader.result;
  //   }
  //   reader.readAsDataURL(fi);
  // }

  Resizer.imageFileResizer(
    fi,
    300,
    300,
    'PNG',
    80,
    0,
    uri => {
        setDetails([uri,details[1],details[2],details[3]]);
        setImg_s({"--img": "url("+uri+")","backgroundSize":"cover","backgroundPosition":"center"})
        // console.log(uri);
    },
    'base64'
);

}

const [sending,setSend] = useState("load"); 

var x = 0;

async function Fetchdata(){

  setSend("load active");

  function Navi(){
    if (x === 5){
      navigate('/aoight-dashboard',{state:location.state,replace:true});
    }
    // console.log(x);
  }

  setDetails([details[0],details[1],details[2],details[3]]);

  // await deleteDoc(doc(base,"users",location.state.uid,"profile","visible"))
  // .then((result) => {console.log("basic del");x += 1;Navi()}).catch((error) => {console.log(error)}); 

  // const mail_del1 = doc(base, "search","1mail");
  // const del_mail1 = {}
  // del_mail1[location.state.uid] = deleteField();
  // await updateDoc(mail_del1,del_mail1)
  // .then((result) => {console.log("mail del");x += 1;Navi()}).catch((error) => {console.log(error)}); 

  // const name_del1 = doc(base, "search","2name");
  // const del_name1 = {}
  // del_name1[location.state.uid] = deleteField();
  // await updateDoc(name_del1,del_name1)
  // .then((result) => {console.log("name del");x += 1;Navi()}).catch((error) => {console.log(error)}); 

  const tag_del1 = doc(base, "search","General");
  const del_tag1 = {}
  del_tag1[location.state.uid] = deleteField();
  await updateDoc(tag_del1,del_tag1)
  .then((result) => {console.log("tag del");x += 1;Navi()}).catch((error) => {console.log(error)}); 
  
  var sending1 = {
    "Photo":details[0],
    "Name":details[1],
    "Email":details[2],
    "Tag":details[3],
    "Uid":location.state.uid
  }

  await setDoc(doc(base,"users",location.state.uid,"profile","visible"),sending1,{merge:true})
  .then((result) => {console.log("basic add");x += 1;Navi()}).catch((error) => {console.log(error)}); 

  var key1 = location.state.uid;

  var mail_obj = {};

  mail_obj[key1] = sending1.Email;

  await setDoc(doc(base, "search","1mail"),mail_obj,{merge:true})
  .then((result) => {console.log("email add");x += 1;Navi()}).catch((error) => {console.log(error)}); 

  var name_obj = {};

  name_obj[key1] = sending1.Name;

  await setDoc(doc(base, "search","2name"),name_obj,{merge:true})
  .then((result) => {console.log("name add");x += 1;Navi()}).catch((error) => {console.log(error)}); 

  var tag_obj = {};

  tag_obj[key1] = sending1.Uid;

  await setDoc(doc(base,"search",sending1.Tag),tag_obj,{merge:true})
  .then((result) => {console.log("tag add");x += 1;Navi()}).catch((error) => {console.log(error)}); 

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

  <>
  
  <div className='dec flex'>
    <img src={Welcome} alt='welcome'></img>
  </div>
  <div className='form flex'>
    <div className='box1'>

    <div className='box2 active'>
        <p><strong>Hello,</strong> we are very Happy to see you here, 
             <br></br> We have Just <strong> One </strong> more step 
             <br></br> We have gathered some information about you,
             <br></br> Please Fill remaining details and continue.</p>
       <div className='image flex'><img src={Welcome} alt='welcome'></img></div>
       <h4>Choose your Profile Pic : </h4>
       <h6 style={{"margin":"5px 0","opacity":"0.5","letterSpacing":"1px"}}> Suggestion : Try to select a square shaped Image <br></br> 1:1 ratio image </h6>
       <div className='pro_img flex'>
         <div ref={my_img} className='image_box' style={img_s}></div>
         <i className="fas fa-camera" onClick={() => file_ref.current.click()}></i>
         <input type='file' multiple={false} ref={file_ref} hidden accept="image/*" onChange={(e) => {Image_up(e)}}></input>
       </div>
       <div className={classi} ref={con_ref1}>
         <label>User Name </label>
         <input type='text' value={details[1]} placeholder={list[1]} onFocus={() => setClassi('input active')} onBlur={Blur1} onChange={Change1}></input>
         <i className="fas fa-pen options"></i>
       </div>
       <div className='input lock'>
         <label>Email </label>
         <input type='text' value={details[2]} readOnly></input>
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

    </div>
  </div>

  </>

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
