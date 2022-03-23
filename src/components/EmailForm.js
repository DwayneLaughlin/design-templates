import React from "react";
import emailjs from 'emailjs-com';

const EmailForm = () => {
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
      };
    
      return (
        <div>
          <form onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="to_name" />
            <label>Email</label>
            <input type="email" name="from_name" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      );
}

export default EmailForm