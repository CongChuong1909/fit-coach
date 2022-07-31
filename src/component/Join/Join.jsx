import React, { useRef } from 'react';
import './Join.scss'
import emailjs from '@emailjs/browser'
function Join() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_sznz2mt', 'template_awla9tl', form.current, 'UygHaeOhmvUR9ZwRX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className='join' id='join'>
            <div className="left--j">
                <hr />
                <div>
                    <span className='stroke'>READY TO </span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span  > YOUR BOBY </span>
                    <span className='stroke'>WITH US?</span>
                </div>
            </div>
            <div className="right--j">
                <form ref={form} className='right--j_email-contact' onSubmit={sendEmail}>
                    <input type="text" name='user_email' placeholder='Enter your email address'/>
                    <button className='btn btn--j_email'>Join Now</button>
                </form>
            </div>
        </div>
    );
}

export default Join;