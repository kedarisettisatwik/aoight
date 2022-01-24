import React, { useState ,useEffect }from 'react';
import { useLocation } from 'react-router-dom';
import Error from '../error/Error';
import './dash.css';
import base from "../../firebase";
import { collection,getDocs, doc, getDoc } from 'firebase/firestore/lite';

const Ele = () => {

  const location = useLocation();

  if (location.state){
    return (<Aap/>);
  }else{
    return (<Error/>);
  }

}

function Aap(){

  const location = useLocation();

  const [items,setItems] = useState({});
  const [loading,setLoading] = useState(true);
  
  async function getvalues(){
    setLoading(true);
    const docRef = doc(base,"users",location.state.uid,"profile","visible");
    const docSnap = await getDoc(docRef);
     if (docSnap.exists()) {
            const ob = docSnap.data();
            console.log(ob);
            var li = {"Name":ob.Name,"Photo":ob.Photo,"Email":ob.Email,"Tag":ob.Tag,"Uid":ob.Uid};
            setItems(li);
            setLoading(false);
            // console.log("Document data:", list);
        } else {
    // doc.data() will be undefined in this case
           console.log("No such document!");
       }
  }

  useEffect(() => {
    getvalues();
  },{});

  if(!loading){
    return (
      <>
      <img alt='pro' src={items.Photo}></img>
      <h3>HI Mr. {items.Name} - {items.Tag}</h3>
      <p> {items.Email} <br></br> </p>
      </>
    );
  }else{
    return (<h2>Hello user</h2>);
  }

}

function Board() {

  return(
    <>
    <div className='dash'>
          <Ele/>
    </div>
    </>
  );

}


export default Board;
