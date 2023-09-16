import React from 'react';
import "./about.css";
import Image from "../../assets/wave.png"
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I hold a Bachelor of Science degree in Computer Engineering from UC Santa Cruz. I am currently working as an Application Engineer at Vanguard.</p>
            <div className="resume__data">
              <a href="https://docs.google.com/document/d/1rQ7TQCrr1aitc79lCcZa2J6NtmLnCOu-/edit?usp=sharing&ouid=114009036661208541437&rtpof=true&sd=true" target="_blank" className="btn"><i className="icon-notebook"></i>Resume
              
              </a>
            </div>
          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
  )
}

export default About