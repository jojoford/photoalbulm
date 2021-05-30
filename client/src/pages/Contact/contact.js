//add contact form here
import "./contact.css";
import PageTitle from '../../components/Title';
import React, { useState } from 'react';
import{ send } from 'emailjs-com';



// import { useMutation } from '@apollo/react-hooks';



// import { validateEmail } from "../../utils/helpers";


function Contact() {
  const [toSend, setToSend] = useState({
    name: '',
    photographer: '',
    message: '',
    email: '',
    time: '',
    startDate: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_y1jvhdl',
      'template_f1iffwr',
      toSend,
      'user_sEQrpGOlpMgWkdKpkI89Y'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

  };


  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  return (
    
    <form className="contact-wrapper" onSubmit={onSubmit}>
      <PageTitle title="Contact"></PageTitle>
      <div className="contact-container">
        <div className="smaller-container">
          <label>
            Your Name:
            <input type="text" name="name" placeholder="Name here..." value={toSend.name} onChange={handleChange} />
          </label>
          <label>
              Photographer's name:
            <input type="text" name="photographer" value={toSend.photographer} onChange={handleChange} />
          </label>
          <label>
            Message:
            <input type="text" name="message"  value={toSend.message} onChange={handleChange}/>
          </label>
          <label>
            Email:
      <input type="email"  name="email" id="email"  value={toSend.email} onChange={handleChange} />
      </label>
      <label>Select Date:</label>
      <input type="text" name="startDate" id="date" value={toSend.startDate} onChange={handleChange} placeholder="MM/dd/yyyy" />
      <label>
        Time:
        <input type="text" name="time" id="time" value={toSend.time} onChange={handleChange} />
      </label>
    </div>
          
          <button type="submit">Submit</button>
          </div>
          </form>
          
  );
  
}


export default Contact;