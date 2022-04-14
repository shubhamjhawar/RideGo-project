import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
//import '../styles/ContactComponent.css'


const Result =() =>{
    return (
        <p>
            Your Message has been Successfully Sent.
            We will Contact you Soon.
        </p>
    );
};

function ContactComponent(props){
    const [result,showResult] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    // add the values of your emailJs
        emailjs
          .sendForm('service_miuxupr', 'template_i7wa1sb', e.target, '_ZCi0qoeSg_ypd02C')
          .then((result) => {
              console.log(result.text);
          }, 
          (error) => {
              console.log(error.text);
          }
          );
          e.target.reset();
          showResult(true);
      };

    setTimeout(() =>{
        showResult(false)
    },5000);

    return (
        <form action="" onSubmit={sendEmail} id="form1" >
            <div className="formWord">
                <h2>Get In Touch !</h2>
                <span><b>Full Name</b></span>
                <br />
                <input 
                    className="input100" 
                    type="text" 
                    name="fullName" 
                    required 
                />
                <br />
                <span><b>Phone Number</b></span>
                <br />
                <input 
                    className="input100" 
                    type="text" 
                    name="phone" 
                    required 
                />
                <br />
                <span><b>Enter Email</b></span>
                <br />
                <input 
                    className="input100" 
                    type="text" 
                    name="email" 
                    required 
                />
                <br />
            </div>
            
            <div className="formWord">
                <span><b>Message</b></span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>

                <div className="row">{
                    result ? <Result/> : null}</div>
            </div>
      </form>
    );
}

export default ContactComponent;