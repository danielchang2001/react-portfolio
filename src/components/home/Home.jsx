import React from 'react';
import "./home.css";
import Me from "../../assets/daniel-transformed.png"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Daniel Chang</h1>
        <span className="home__education">4th year student at UC Santa Cruz<br/>Major: Computer Engineering</span>
        <HeaderSocials />
        <a href="#contact" className="btn">Contact</a>
        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home