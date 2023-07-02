import React, { useEffect, useState } from 'react';
import VClogo from './images/videChatLogo.png';
import './styles/dashBoard.css';
import { auth } from '../../firebase';

function DashBoard(){

    const [user, setUser] = useState(auth.currentUser);

    useEffect(() => {
        if (!user) {
          // Redirect to previous site if not authenticated
          window.location.replace("/aoight/#/vibeChats");
        } else {
          // Retrieve user information
          setUser(auth.currentUser);
        }
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
                </section>
                <section className='chatArea'>
                    <img src={VClogo} alt='logo' className='logo'></img>
                </section>
            </section>
        </section>
    )
};

export default DashBoard;