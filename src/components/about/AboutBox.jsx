import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-speech"></i>

            <div>
                <h3 className="about__title">Languages</h3>
                <p className="about__subtitle">● Python</p>
                <p className="about__subtitle">● Java</p>
                <p className="about__subtitle">● C</p>
                <p className="about__subtitle">● JavaScript</p>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-screen-smartphone"></i>

            <div>
                <h3 className="about__title">Frontend</h3>
                <p className="about__subtitle">● Vue.js</p>
                <p className="about__subtitle">● React</p>
                <p className="about__subtitle">● Angular</p>
                <p className="about__subtitle">● HTML, CSS</p>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-layers"></i>
            <div>
                <h3 className="about__title">Backend</h3>
                <p className="about__subtitle">● Spring</p>
                <p className="about__subtitle">● Laravel</p>
                <p className="about__subtitle">● MySQL</p>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-options-vertical"></i>
            <div>
                <h3 className="about__title">Other</h3>
                <p className="about__subtitle">● Git</p>
                <p className="about__subtitle">● Agile</p>
            </div>
        </div>
    </div>
  )
}

export default AboutBox