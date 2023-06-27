import React from 'react'
import emailjs from 'emailjs-com'

import './Emailsend.css';
const EmailSend = (props) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_preoeo8','template_eokkqpc',e.target,'ZSp8z_wBwZkly-eba')
      .then(res => {
        console.log(res);
        props.showAlert("MESSAGE SEND SUCCESFULLY","success");
      })
      .catch(err => console.log(err));
  };
 

  return (
    <div class="container2">
		<h1 className='conatct'>We Are Here to resolve your problem </h1>
		<form className="form2"onSubmit={sendEmail}>
			<label for="name">Enter your Name:</label>
			<input type="text" id="name" name="name" required/>

			<label for="email">Enter your Email:</label>
			<input type="email" id="useremail" name="useremail" required/>

			<label for="message">Enter your Problem:</label>
			<textarea id="message" name="message" required></textarea>

			<button type ="submit"className='button-85' >Send</button>
		</form>
	</div>


  );
};

export default EmailSend;
