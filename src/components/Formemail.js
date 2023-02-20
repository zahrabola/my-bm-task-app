/* service_vm64qvj - YOUR_SERVICE_ID 
template_l9uwq4e - YOUR_TEMPLATE_ID
yYsGDmsWg3mBTFNo4 - YOUR_PUBLIC_KEY

*/


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Formemail = () => {
    const form = useRef()
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vm64qvj', 'template_l9uwq4e', form.current, 'yYsGDmsWg3mBTFNo4')
      .then((result) => {
          console.log("email sent successfully",result.text);
      }, (error) => {
          console.log("email has failed",error.text);
      });
      e.target.reset(30000)
  };





    return(
        <section>
            <div className="container mt-2">
            <h4 className="Emailtitle">Send an Email</h4>
            <form ref={form} onSubmit={sendEmail} >
                <div className="form-group formname">
                 <label id="fn-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullname"
                      placeholder="Full Name"
                      name='user_name' 
                      />
                </div>
                <div className="form-group">
                 <label id="e-label">Email address</label>  
                   <input
                     type="email"
                     className="form-control" 
                     name='user_email'
                     id="emailform" 
                     placeholder="Email"
                     required
                     />
                </div>
                <div className="form-group">
                    <label id="sub-label">Subject:</label>
                      <input 
                       type="text"
                       name="subject"
                       className="form-control"
                       id="subject"
                       placeholder="Subject"
                       required
                      />
                </div>
               <div className="form-group">
                <label  id="des-label">Description :</label>
                 <textarea 
                  className="form-control"
                  name="message"
                  cols="30" 
                  row="50" 
                  id="message"
                  required
                />
                </div>
                <div className="mt-2 mb-4">
                <button type="submit" className="btn btn-light" value="send">
                    Send Email
                 </button>
                </div>
            </form>
          </div>
        </section>
    )
}

export default Formemail