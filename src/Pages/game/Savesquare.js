import React from 'react';
// import { useNavigate } from 'react-router-dom';

function Savesquare() {
    // const navigate = useNavigate();
    // navigate('/asdfasf');
    const style1 = {"position":"relative","outline":"none","border":"none","width":"100vw","height":"100vh","display":"flex","justifyContent":"center","alignItems":"center"};    
    return (
    <iframe title='game' src='https://kedarisettisatwik.github.io/square/rules.html' style={style1}></iframe>
    );
}

export default Savesquare;