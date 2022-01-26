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

  const [htmlpart,setHtml]  = useState("<p> I am "+ details.Name +"</p>");

  function Addhtml(){
    var pre = htmlpart;
    setHtml(pre + " append ");
  }

  return(
    <>
       <div className='dash'>

       <div className='name flex' onClick={() => Addhtml()}>
                <div className='img' style={{'--i':"url("+details.Photo+")"}}>
                  <div className='cover'></div>
                  <div className='contain'></div>
                </div>
                <p className='flex'>
                  <span>{details.Name}</span>
                  <label>{details.Email}</label>
                </p>
        </div>

        <div className='flex htmltoreact' style={{"width":"100%","height":"500px"}}>
          <div contentEditable='true'  dangerouslySetInnerHTML={{__html:htmlpart}} >

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
