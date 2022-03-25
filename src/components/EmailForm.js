import React, { useState } from "react";
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [subject, setSubject] = useState()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_h1a3fdm', 'template_5fn4oh9', e.target, 'pymh7rUJd6iCnVMF4')
          .then((result) => {
              console.log(result.text);
              console.log(e.target)
              
          }, (error) => {
              console.log(error.text);
              
          });
          e.target.reset()
          alert ("Your message has been sent. We will reply to you shortly")
      };
    
      return (
        <div>
          <br></br>
          <form onSubmit={sendEmail}>
          <label>Subject  </label>
            <select value={subject} name="subject" onChange={e => setSubject(e.target.value)}>
              <option>Water</option>
              <option>gas</option>
              <option>electrical</option>
            </select>
            <br></br>
            <label>Name  </label>
            <input type="text" name="from_name" />
            <br></br>
            <label>Email  </label>
            <input type="email" name="from_email" />
    
            <br></br>
            <textarea name="message" placeholder="What do you need help with?" />
            <br></br>
            <input type="submit" value="Send" />
          </form>
        </div>
      );
}

export default EmailForm