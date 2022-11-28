import React, { useRef }from 'react';
import {useState} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const initialText = "Send message";
  const [buttonText, setButtonText] = useState(initialText);

  function handleClick() {
    
    setButtonText('Message Sent!')

    setTimeout(() => {
      setButtonText(initialText);
    }, 3000);
  }
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hg2fuan', 'template_i0vtwah', form.current, '9DeAJxMxzgpCb6bIT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
  }
  return (
    
    <div className="section contact container section" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's Talk</h3>
          <p className="contact__details">Email: dchang30@ucsc.edu</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="form contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder="Your name" name="user_name"/>
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder="Your email" name="user_email"/>
            </div>
          </div>
          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder="Subject" name="subject"/>
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea name="message" id="" cols="30" rows="10" className="contact__form-input" placeholder="Your message"></textarea>
            </div>
            <button className="btn" type="submit" value="Send" onClick={handleClick}>{buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default Contact