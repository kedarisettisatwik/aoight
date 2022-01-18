import './App.css';
import './index.css';

import emailjs from 'emailjs-com';

function Join() {

  function sendMail(e){

    e.preventDefault();

    emailjs.sendForm('service_al7hvrn', 'template_710deug', e.target ,'user_nPMGjiiu0zJZryRCEcRQQ')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    e.target.reset();

  }

  return (
    <div className='join'>
        <p>Do you want to Join with Us ! </p>
        <form className='in flex' onSubmit={sendMail} autoComplete='off'>
            <input placeholder='email@gmail.com' type='email' name='mail' required autoComplete='off'></input>
            <input type='submit' value='Join'></input>
        </form>
    </div>
  );
}

export default Join;