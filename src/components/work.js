// Work.js

import React from 'react';
import project1 from './images/work1.jpg';
import project2 from './images/work2.jpg';
import project3 from './images/work3.jpg';

const Work = () => {
  return (
    <section className="work section" id="Projects">
      <h2 className="section-title">Projects</h2>

      <div className="work__container bd-grid">
        <a href="#" className="work__img">
          <img src={project1} alt="pavan" />
          <p>BMI Calculater</p>
        </a>
        <a href="#" className="work__img">
          <img src={project2} alt="pavan" />
          <p>Movie rating predicition</p>
        </a>
        <a href="#" className="work__img">
          <img src={project3} alt="pavan" />
          <p>Email spam detection</p>
        </a>
        
      </div>
    </section>
  );
};

export default Work;
