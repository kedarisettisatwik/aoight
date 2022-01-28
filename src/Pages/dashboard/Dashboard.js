import React, { useState ,useEffect }from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import Error from '../error/Error';
import './dash.css';
import base from "../../firebase";
import { collection,getDocs, doc, getDoc } from 'firebase/firestore/lite';
import {isMobile } from 'react-device-detect';

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

  const [pages,setPages] = useState(["page active","page","page"]);

  const [count,setCount] = useState(0);

  if (isMobile){
    setPages(["page active","page","page","page"]);
  }

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

 function Pagechange(a){
   if (isMobile){
     if (a === 0){
       setPages(["page active","page","page","Page"]);
     }else if (a === 1){
       setPages(["page","page active","page","page"]);
     }else if (a === 2){
      setPages(["page","page","page active","page"]);
     }else if (a === 3){
      setPages(["page","page","page active","page active"]);
     }
   }else{
    if (a === 0){
      setPages(["page active","page","page"]);
    }else if (a === 1){
      setPages(["page","page active","page"]);
    }else if (a === 2){
     setPages(["page","page","page active"]);
    }
   }
   setCount(a);
 }

  useEffect(() => {
    getvalues();
  },[]);

  function Nav(){
    return(
         <div className='buttons flex'>
           <div className={pages[0]} onClick={() => Pagechange(0)}>
             <i className="fas fa-home"></i> <span>Home</span>
           </div>
           <div className={pages[1]} onClick={() => Pagechange(1)}>
             <i className="fas fa-comment-alt"></i><span>Chats</span>
           </div>
           <div className={pages[2]} onClick={() => Pagechange(2)}>
             <i className="fab fa-safari"></i><span>Browse</span>
           </div>
         </div>
    );
  }

  function Space(){
    if (count === 0){
      return (
        <h3>Home page</h3>
      );
    }else if (count === 1){
      return(
        <h3>Chats</h3>
      );
    }else if (count === 2){
      return(
      <h3>Profile</h3>
      );
    }
  }

  function Main(){
    if (count === 0){
      return (
        <h3>Home page</h3>
      );
    }else if (count === 1){
      return(
        <h3>Chats</h3>
      );
    }else if (count === 2){
      return(
      <h3>Profile</h3>
      );
    }
  }

  return(
    <>
       <div className='dash flex'>
         <div className='sidebar'>

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
                <i className="far fa-plus-square add"></i>
         </div>
         <Nav/>
         </nav>

         <section className='sidesection flex'>
           <Space/>
         </section>

         <section className='mainsection flex'>
           <Main/>
         </section>

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
