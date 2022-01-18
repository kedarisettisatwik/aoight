import React from 'react';
import './App.css';
import './index.css';

import base from "./firebase";
import { collection,getDocs, doc, getDoc } from 'firebase/firestore/lite';
import { useState ,useEffect} from 'react';

class One extends React.Component{

    constructor (props){
        super(props);
        this.user = props.user;
        this.date = props.date;
        this.para = props.para;
        this.star = props.star;
        this.reaction = props.reaction;
        this.state = {
            classes:'rev'
        };
    }

    rerender(){
        this.setState({classes:'rev active'});
    }

    render(){

        return (
            <div className={this.state.classes} id='1' onClick={(e) => this.rerender()}>
                        <h2>{this.user}</h2>
                        <span>{this.date}</span>
                        <div className='stars'>
                            <div className='light'>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <div className='dark' style={{"--i":this.star}}>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <p>{this.para}</p>
                        <i className={this.reaction + " face"}></i>
            </div>
        );
    }

}

function Rev(){

    const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);

  async function getvalues(){
    setLoading(true);
    const reviewsCol = collection(base, 'aoight reviews');
    const revSnapshot = await getDocs(reviewsCol);
    const revList = revSnapshot.docs.map(doc => doc.data());
    // console.log(revList);
    setItems(revList);
    setLoading(false);
  }

  useEffect(() => {
    getvalues();
  }, []);

  if (loading){
      return(
        <div className='box1 flex'>
        <div className='cell flex'>
            <div className='container'>
                <div className='rev'><p>Loading..</p></div>
            </div>
        </div>
    </div>
      )
  }else{
    return(
        <div className='box1 flex'>
            <div className='cell flex'>
                <div className='container'>
                    {
                        items.map(item => <One reaction={item.reaction} star={item.star} user={item.user} date={item.date} para={item.para} />)
                    }
                </div>
            </div>
        </div>
    )
  }

}

export default Rev;