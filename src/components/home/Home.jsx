import React from 'react';
import "./home.css";
import Me from "../../assets/profile.png"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Daniel Chang</h1>
        <span className="home__education">4th year at UC Santa Cruz pursuing <br/>a B.S. in Computer Engineering.</span>
        <HeaderSocials />
        <a href="#contact" className="btn">Contact</a>
        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home