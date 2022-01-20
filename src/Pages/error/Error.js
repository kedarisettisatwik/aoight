import React from 'react';
import Error_img from './error_page.png';

function Error(){
    const style1 = {"position":"relative","width":"100vw","height":"100vh","display":"flex","justifyContent":"center","alignItems":"center"};
    return(
        <div className='box flex' style={style1}>
            <img src={Error_img} alt='error' style={{"width":"400px","max-width":"100%"}}></img>
        </div>
    )
}

export default Error;