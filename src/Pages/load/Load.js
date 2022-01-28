import React,{ useState ,useEffect} from 'react';
import Load_img from './loading.png';
import '../../index.css';
import { useLocation, useNavigate } from 'react-router-dom';
import {isBrowser, isMobile } from 'react-device-detect';

import base from "../../firebase";
import { doc , getDoc } from 'firebase/firestore/lite';

function Error(){
    const location = useLocation();
    const navigate = useNavigate();
    const width1 = window.innerWidth;

    const style1 = {"position":"relative","width":"100vw","height":"100vh","display":"flex","justifyContent":"center","alignItems":"center"};
    
    const [alr,setAlr] = useState(false);

    async function getvalues(){
        setAlr(true);
        const docRef = doc(base,"users",location.state.Uid,"profile","visible");
        const docSnap = await getDoc(docRef);
         if (docSnap.exists()) {
             setTimeout(() => {
               if (isBrowser){
                 navigate('/aoight-dashboard',{state:location.state,replace:true});
               }else if(isMobile){
                 if (width1 > 900){
                   navigate('/aoight-dashboard',{state:location.state,replace:true});
                 }else{
                   // small screen
                 }
               }
             }, 1000);
            } else {
              // console.log("New user");
              setTimeout(() => {
                navigate('/aoight-new',{state:location.state,replace:true});
              }, 1000);
           }
      }
    
      useEffect(() => {
        getvalues();
      }, []);

    return(
        <div className='box flex' style={style1}>
            <img src={Load_img} alt='error' style={{"width":"400px","maxWidth":"100%"}}></img>
        </div>
    )
}

export default Error;