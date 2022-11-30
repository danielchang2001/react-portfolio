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
            <p className="about__description">I'm pursuing a B.S. degree in Computer Engineering with a concentration in Systems Programming at UCSC. I've always been passionate about using software as tools to express my creativity, such as creating animations in Maxon Cinema 4D or video game maps in Hammer Editor. My goal for learning Software Engineering and Frontend Development in particular is to further expand my creative skill set; the opportunity for growth in this field is truly exciting, and I want to be able to use what I learn to contribute something meaningful to the world.</p>
           
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number">1.7 years</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Systems Programming</h3>
                <span className="skills__number">3.5 years</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Animation & Video Editing</h3>
                <span className="skills__number">4 years</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>

            <div className="resume__data">
              <a href="https://docs.google.com/document/d/1rQ7TQCrr1aitc79lCcZa2J6NtmLnCOu-/edit?usp=sharing&ouid=114009036661208541437&rtpof=true&sd=true" target="_blank" className="btn">My Resume
              <i className="icon-notebook"></i>
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