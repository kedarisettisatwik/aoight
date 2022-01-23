import './App.css';
import './index.css';
import Logo from './assests/logo.png';

import base from "./firebase";
import { doc, getDoc } from 'firebase/firestore/lite';
import { useState ,useEffect } from 'react';

// async function getCities(db) {
//     const citiesCol = collection(db, 'aoight values');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     console.log(cityList);
// }

// async function getvalues(){
//   const docRef = doc(base,"aoight values","count");
//   const docSnap = await getDoc(docRef);

//    if (docSnap.exists()) {
//           console.log("Document data:", docSnap.data());
//       } else {
//   // doc.data() will be undefined in this case
//          console.log("No such document!");
//      }
// }

// getvalues();

function shorted(num) {
  const suff = [""," K "," M "," B "," T "];
  var sn = Math.floor((""+num).length / 3);
  var shortv = (sn !== 0 ? (num / Math.pow(1000,sn)) : num );
  if (shortv % 1 !== 0){
    shortv = shortv.toFixed(1);
  }
  return (shortv + suff[sn]);
}

function Values(){

  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);

  async function getvalues(){
    setLoading(true);
    const docRef = doc(base,"aoight values","count");
    const docSnap = await getDoc(docRef);
     if (docSnap.exists()) {
            const list = [];
            // console.log("Document data:", docSnap.data());
            var re1 = shorted(parseInt(docSnap.data().reviews));
            list.push(re1);
            var re2 = parseFloat(docSnap.data().rating);
            list.push(re2);
            var re3 = shorted(parseInt(docSnap.data().users));
            list.push(re3);
            setItems(list);
            setLoading(false);
            // console.log("Document data:", list);
        } else {
    // doc.data() will be undefined in this case
           console.log("No such document!");
       }
  }

  useEffect(() => {
    getvalues();
  }, []);

  if (loading){
    return(<div className='box2 flex'></div>);
  }else{
    return (
      <div className='box2 flex'>
          <div className='show'>
            <img src={Logo} alt='oops' className='icon'></img>
  
            <div className='c flex'>
                     <i className="fas fa-comment-alt"></i>
                     <h2><span> {items[0]} </span><br></br><label>Reviews</label></h2>
             </div>
  
            <div className='c flex'>
               <i className="fas fa-star"></i>
               <h2><span> {items[1]} </span><br></br><label>Rating</label></h2>
            </div>
  
            <div className='c flex'>
               <i className="far fa-laugh-wink"></i>
               <h2><span> {items[2]} </span><br></br><label>Happy Users</label></h2>
            </div>
  
          </div>
        </div>
    ); 
  }
}


export default Values;
