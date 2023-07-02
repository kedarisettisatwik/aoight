import React, { useEffect, useState } from 'react';
// import VClogo from './images/videChatLogo.png';

import {firestore} from '../../firebase';
import { auth } from '../../firebase';


function DashBoard(){

    const [user, setUser] = useState(auth.currentUser);
    const [userName,setUserName] = useState(' ');
    const [userMail,setUserMail] = useState('');
    const [userPic,setUserPic] = useState('');

    useEffect(() => {
        if (!auth.currentUser) {
          // Redirect to previous site if not authenticated
          window.location.replace("/aoight/#/vibeChats");
        } else {
          // Retrieve user information
          setUser(auth.currentUser);

          firestore.collection('users').doc(user.uid).collection('profileDetails').doc('details').get().then((doc) => {
            if (doc.exists) {
                setUserName(doc.data().userName);
                setUserMail(doc.data().userMail);
                setUserPic(doc.data().userPic);
            } else {
                console.log('No user profile found');
            }
          })
            .catch((error) => {
            console.error('Error getting user profile:', error);
            });

        }
      }, []);
      
    return(
        <section id='screen'>
            <section className='home'>
                <div className='profile'>
                    <div className='dp'>
                        <span>{userName[0]}</span>
                    </div>
                    <h3>{userName}</h3>
                </div>
                <div className='users'>

                </div>
            </section>
            <section className='chatArea'>

            </section>
        </section>
    )
};

export default DashBoard;