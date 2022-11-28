import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="section contact container section" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's Talk</h3>
          <p className="contact__details">Email: dchang30@ucsc.edu</p>
        </div>
        <div className="form contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder="Your name" />
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder="Your email" />
            </div>
          </div>
          <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder="Subject" />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea name="" id="" cols="30" rows="10" className="contact__form-input" placeholder="Your message"></textarea>
            </div>
            <button className="btn">Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Contact