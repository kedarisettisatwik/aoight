import React, { useState ,useEffect, createRef }from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import Error from '../error/Error';
import './dash.css';
import base from "../../firebase";
import {doc, getDoc,setDoc } from 'firebase/firestore/lite';
import {isMobile } from 'react-device-detect';

function Aap(){

  const location = useLocation();
  const navigate = useNavigate();

  const [details,setDetails] = useState(
    {"Name":location.state.Name,
    "Photo":location.state.Photo,
    "Email":location.state.Email,
    "Uid":location.state.Uid,
    "Text":"Hello",
    "Tag":"General"}
  );

  const ref1 = createRef();

  async function getvalues(){

    const docRef = doc(base,"users",location.state.Uid,"profile","visible");
    const docSnap = await getDoc(docRef);
     if (docSnap.exists()) {
            const ob = docSnap.data();
            // console.log(ob);
            var li = {"Name":ob.Name,"Photo":ob.Photo,"Email":ob.Email,"Tag":ob.Tag,"Uid":ob.Uid,"Text":ob.Text};
            setDetails(li);
        } else {
           //  console.log("No such document!");
           navigate('/aoight',{replace:'true'});
       }

  }

  useEffect(() => {
    getvalues();
  },[]);

  async function Save1(){
    const x = ref1.current.innerHTML;
    // console.log(x);
    const Ref = doc(base,"users",location.state.Uid,"profile","visible");
    // Set the "capital" field of the city 'DC'
    var sending1 = {"Text":x};
    await setDoc(Ref,sending1,{merge:true})
    .then((result) => {console.log("basic add");}).catch((error) => {console.log(error)}); 
  }

  return(
    <>
       <div className='dash flex'>

         <nav className='flex'>

         <div className='name flex'>
                <div className='img' style={{'--i':"url("+details.Photo+")"}}>
                  <div className='cover'></div>
                  <div className='contain'></div>
                </div>
                <p className='flex'>
                  <span>{details.Name}</span>
                  <label>{details.Email}</label>
                </p>
         </div>

         <button onClick={() => Save1()}>save</button>

         </nav>

         <section className='board flex'>

           <section className='buttons flex'>

             <div className='button' onClick={(e) => {document.execCommand('removeFormat', false,null);e.target.classList.toggle('active');}}>
               <i className="fas fa-eraser"></i>
             </div>

             <div className='button' onClick={(e) => {document.execCommand('bold', false,null);e.target.classList.toggle('active');}}>
                 <i className="fas fa-bold"></i>
             </div>

             <div className='button' onClick={(e) => {document.execCommand('italic', false,null);e.target.classList.toggle('active');}}>
                 <i className="fas fa-italic"></i>
             </div>

             <div className='button' onClick={(e) => {document.execCommand('underline', false,null);e.target.classList.toggle('active');}}>
                <i className="fas fa-underline"></i>
             </div>

             <div className='button' onClick={(e) => {document.execCommand('strikeThrough', false,null);e.target.classList.toggle('active');}}>
               <i className="fas fa-strikethrough"></i>
             </div>

             <div className='button' onClick={(e) => {document.execCommand('insertUnorderedList', false,null);e.target.classList.toggle('active');}}>
               <i className="fas fa-list"></i>
             </div>

             <div className='button' onClick={(e) => {document.execCommand('insertOrderedList', false,null);e.target.classList.toggle('active');}}>
               <i className="fas fa-list-ol"></i>
             </div>

           </section>
           
           <section ref={ref1} className='text' contentEditable='true' dangerouslySetInnerHTML={{ __html: details.Text }}>

           </section>

         </section>

       </div>
    </>
  )

}

function Board() {

  const location = useLocation();

  if (location.state){
    return (<Aap/>);
  }else{
    return (<Error/>);
  }

}


export default Board;
