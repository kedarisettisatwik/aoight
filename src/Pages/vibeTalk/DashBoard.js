import React, { useEffect, useState } from 'react';
import VClogo from './images/videChatLogo.png';
import './styles/dashBoard.css';
import {firestore, auth } from '../../firebase';

function DashBoard(){

    const [user, setUser] = useState(auth.currentUser);

    const [userName,setUserName] = useState('.');
    const [userColor,setUserColor] = useState('grey');
    const [userPic,setUserPic] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
            firestore
              .collection('users')
              .doc(user.uid)
              .collection('profileDetails')
              .doc('details')
              .get()
              .then((doc) => {
                if (doc.exists) {
                  setUserName(doc.data().userName);
                  setUserColor(doc.data().userColor);
                  setUserPic(doc.data().userPic);
                } else {
                  console.log('No user profile found');
                }
              })
              .catch((error) => {
                console.error('Error getting user profile:', error);
              });
          } else {
            // Redirect to previous site if not authenticated
            window.location.replace('/aoight/#/vibeChats');
          }
        });
    
        return () => {
          unsubscribe();
        };
      }, []);
      
    return(
        <section className='screen'>
            <section className='box'>
                <section className='left'>
                    <header>
                        <h2>VibeChats</h2>
                        <i className="fa-solid fa-sliders"></i>
                    </header>
                    <div className='nav'>
                        <span>Pinned</span>
                        <span className='active'>Chats</span>
                        <span>Groups</span>
                        <span>Search</span>
                    </div>

                    <div className='self'>
                        <div className={userPic === '' ? 'dp' : "dp pic"} style={{backgroundColor:userColor}}>
                            <span>{userName[0]}</span>
                            <div className='img' style={{backgroundImage:userPic}} ></div>
                        </div>
                        <div className='name'>
                            <h2>{userName} [you]</h2>
                            <span>Chat is Empty</span>
                        </div>
                    </div>

                    {/* fill other users from firebase */}

                </section>
                <section className='chatArea'>
                    <img src={VClogo} alt='logo' className='logo'></img>
                </section>
            </section>
        </section>
    )
};

export default DashBoard;