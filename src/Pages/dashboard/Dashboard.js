import React, { useState ,useEffect }from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import Error from '../error/Error';
import './dash.css';
import base from "../../firebase";
import { collection,getDocs, doc, getDoc } from 'firebase/firestore/lite';

function Aap(){

  const location = useLocation();
  const navigate = useNavigate();

  const [items,setItems] = useState({});
  
  async function getvalues(){

    const docRef = doc(base,"users",location.state.Uid,"profile","visible");
    const docSnap = await getDoc(docRef);
     if (docSnap.exists()) {
            const ob = docSnap.data();
            // console.log(ob);
            var li = {"Name":ob.Name,"Photo":ob.Photo,"Email":ob.Email,"Tag":ob.Tag,"Uid":ob.Uid};
            setItems(li);
        } else {
           //  console.log("No such document!");
           navigate('/aoight',{replace:'true'});
       }

  }

  getvalues();

  return(
    <>
       <div className='flex dash'>
         <div className='side'>
           <h3>HEllo</h3>
         </div>
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
