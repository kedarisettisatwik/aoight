import React,{ useState ,useEffect} from 'react';
import Load_img from './loading.png';
import { useLocation, useNavigate } from 'react-router-dom';

import base from "../../firebase";
import { doc , getDoc } from 'firebase/firestore/lite';

function Error(){
    const location = useLocation();
    const navigate = useNavigate();

    const style1 = {"position":"relative","width":"100vw","height":"100vh","display":"flex","justifyContent":"center","alignItems":"center"};
    
    const [alr,setAlr] = useState(false);

    async function getvalues(){
        setAlr(true);
        const docRef = doc(base,"users",location.state.Uid,"profile","visible");
        const docSnap = await getDoc(docRef);
         if (docSnap.exists()) {
             setTimeout(() => {
              navigate('/aoight-dashboard',{state:location.state,replace:true});
             }, 1800);
            } else {
              // console.log("New user");
              setTimeout(() => {
                navigate('/aoight-new',{state:location.state,replace:true});
              }, 1800);
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