import React from 'react';
import {isMobile } from 'react-device-detect';
// import { useNavigate } from 'react-router-dom';

function Savesquare() {
    // const navigate = useNavigate();
    // navigate('/asdfasf');
    const style1 = {"position":"relative","outline":"none","border":"none","width":"100vw","height":"100vh","display":"flex","justifyContent":"center","alignItems":"center"};    
    if (isMobile){
        return (
            <iframe title='game1' src='https://kedarisettisatwik.github.io/index.html?mobile=1' style={style1}></iframe>
            );
    }else{
        return (
            <iframe title='game2' src='https://kedarisettisatwik.github.io/index.html?mobile=0' style={style1}></iframe>
            );
    }
}

export default Savesquare;