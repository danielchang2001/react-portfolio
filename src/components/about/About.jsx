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
            <p className="about__description">I am currently pursuing a Bachelor of Science degree in Computer Engineering with a concentration in Systems Programming at UC Santa Cruz. I've always been passionate about using software as tools to express my creativity, such as creating animations in Maxon Cinema 4D or video game maps in Valve Hammer Editor. My goal for learning Software Engineering and Full Stack Development in particular is to further expand my creative skill set; the opportunity for growth in this field is truly exciting, and I want to be able to use what I learn to build something meaningful for the world.</p>
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