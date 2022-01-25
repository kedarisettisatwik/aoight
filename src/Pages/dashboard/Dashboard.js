import React, { useState ,useEffect }from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import Error from '../error/Error';
import './dash.css';
import base from "../../firebase";
import { collection,getDocs, doc, getDoc } from 'firebase/firestore/lite';

function Aap(){

  const location = useLocation();
  const navigate = useNavigate();

  const [details,setDetails] = useState(
    {"Name":location.state.Name,
    "Photo":location.state.Photo,
    "Email":location.state.Email,
    "Uid":location.state.Uid,
    "Tag":"General"}
  );
  
  async function getvalues(){

    const docRef = doc(base,"users",location.state.Uid,"profile","visible");
    const docSnap = await getDoc(docRef);
     if (docSnap.exists()) {
            const ob = docSnap.data();
            // console.log(ob);
            var li = {"Name":ob.Name,"Photo":ob.Photo,"Email":ob.Email,"Tag":ob.Tag,"Uid":ob.Uid};
            setDetails(li);
        } else {
           //  console.log("No such document!");
           navigate('/aoight',{replace:'true'});
       }

  }

  useEffect(() => {
    getvalues();
  },[])

  return(
    <>
       <div className='flex dash'>

         <div className='side'>

          <div className='nav'>

            <div className='name flex'>
                <div className='img' style={{'--i':"url("+details.Photo+")"}}>
                  <div className='cover'></div>
                  <div className='contain'></div>
                </div>
                <p>
                  <span>{details.Name}</span><br></br>
                  <label>{details.Email}</label>
                </p>
            </div>

          </div>

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
