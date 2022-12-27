import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-speech"></i>

            <div>
                <h3 className="about__title">Languages</h3>
                <p className="about__subtitle">● Python</p>
                <p className="about__subtitle">● JavaScript</p>
                <p className="about__subtitle">● C</p>
                <p className="about__subtitle">● PHP</p>
                <p className="about__subtitle">● SQL</p>
                <p className="about__subtitle">● Verilog</p>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-screen-smartphone"></i>

            <div>
                <h3 className="about__title">Frontend</h3>
                <p className="about__subtitle">● React</p>
                <p className="about__subtitle">● Vue.js</p>
                <p className="about__subtitle">● HTML5</p>
                <p className="about__subtitle">● CSS3</p>
                <p className="about__subtitle">● WordPress</p>
                <p className="about__subtitle">● Photoshop</p>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-layers"></i>
            <div>
                <h3 className="about__title">Backend</h3>
                <p className="about__subtitle">● Node.js</p>
                <p className="about__subtitle">● MySQL</p>
                <p className="about__subtitle">● Firebase</p>
                <p className="about__subtitle">● REST API</p>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-options-vertical"></i>
            <div>
                <h3 className="about__title">Other</h3>
                <p className="about__subtitle">● Git</p>
                <p className="about__subtitle">● Agile</p>
                <p className="about__subtitle">● Scrum</p>
            </div>
        </div>
    </div>
  )
}

export default AboutBox