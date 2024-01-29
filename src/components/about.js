// About.js

import React from 'react';
import about from './images/photo.jpg'
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={about} alt="" />
        </div>

        <div>
          <h2 className="about__subtitle">I am Praveen Kumar</h2>
          <p className="about__text">
          Currently Pursuing a Bachelor's degree in Computer Science with a specialization in Airtificial intelligence, I am deeply passionate about the dynamic fields of Airtificial intelligence, Full Stack Development, and Machine Learning. My academic journey has equipped me with a solid foundation in computer science principles, and I have eagerly delved into the Airtificial Intelligence, programming, and ML during my coursework. I am driven by the potential to harness data-driven insights to solve real-world problems, and I have honed my skills through hands-on projects and extracurricular activities. With a strong commitment to continuous learning and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
